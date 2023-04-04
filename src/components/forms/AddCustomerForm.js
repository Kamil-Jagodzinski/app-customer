import {useState} from 'react'

export default function AddProducrForm(props) {    
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();

        const [name, setName] = useState( '' )
        const [vat, setVat] = useState( '' )
        const [cd, setCD] = useState( yyyy+'-'+mm+'-'+dd )
        const [addres, setAddres] = useState( '' )
    
        return (
        <form className="side-form">
                <h3> Edit customer </h3>
    
                <h6> Name </h6>
                <input  type="text" 
                        onChange={ e=>setName(e.target.value) }
                        value={name} />
                
                <h6> 
                        VAT identification number 
                </h6>
                <h5>
                        PL XX XX XX XX XX 
                </h5>
                <input  type="text" 
                        onChange={ e=>setVat(e.target.value) }
                        value={vat} />
    
                <h6> Creation date </h6>
                <input  type="text" 
                        onChange={ e=>setCD(e.target.value) }
                        value={cd} />
    
                <h6> Addres </h6>
                <input  type="text" 
                        onChange={ e=>setAddres(e.target.value) }
                        value={addres} />
    
                <button type="submit" onClick={handleSubmit}> Confirm </button>
        </form>        
        )

        function isValidName(name) {
                return /^[a-zA-Z\s]{1,}$/.test(name);
        }

        function isValidVATNumber(vatNumber) {
                const regex = /^(PL)?[0-9]{10}$/;
                const cleanVATNumber = vatNumber.replace(/ |-/g, '');
                return regex.test(cleanVATNumber)
        }

        function isDateValid(dateString) {
                const regex = /^\d{4}-\d{2}-\d{2}$/;
                return regex.test(dateString);
        }


        function handleSubmit(event) {
                event.preventDefault()
                let copy_db = [...props.Customers_db]
                let newRecord = { ID: Number( copy_db.length > 0 ? copy_db[copy_db.length-1].ID + 1 : 1 ) }
                let isComplete = true
                let invalidData = ''

                
                if(!isValidName(name)) {
                        isComplete = false
                        invalidData += '-name\n'
                }
                if (!isValidVATNumber(vat)){
                        isComplete = false
                        invalidData += '-VAT id number (PL XX XX XX XX XX)\n'
                }
                if(!isDateValid(cd)){
                        isComplete = false
                        invalidData += '-Creation date (YYYY-MM-DD)\n'
                } 

                
                if(isComplete){
                        newRecord['Name'] = name 
                        newRecord['VAT identification number'] = vat
                        newRecord['Creation date'] = cd 
                        newRecord['Addres'] = addres
                        copy_db.push(newRecord)
                        props.setCustomer_db(copy_db)
                        props.setForm(0)
                }
                else(
                        alert('Provided invalid value:\n' + invalidData)
                )
        }
}    
