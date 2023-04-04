import {useState} from 'react'

export default function EditCompaignForm(props) {
    let copy_db = [...props.Customers_db]
    let idx = copy_db.findIndex( (camp) => camp.ID === Number(props.ID) ) 
    const [name, setName] = useState( copy_db[idx][ 'Name' ] )
    const [vat, setVat] = useState( copy_db[idx][ 'VAT identification number'] )
    const [cd, setCD] = useState( copy_db[idx]['Creation date'] )
    const [addres, setAddres] = useState( copy_db[idx]['Addres'])

    return (
    <form className="side-form">
            <h3> Edit customer </h3>

            <h6> Name </h6>
            <input  type="text" 
                    onChange={ e=>setName(e.target.value) }
                    value={name} />
            
            <h6> VAT identification number </h6>
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
        var isComplete = true
        var invalidData = ''

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
                copy_db[idx]['Name'] = name
                copy_db[idx]['VAT identification number'] = vat
                copy_db[idx]['Creation date'] = cd
                copy_db[idx]['Addres'] = addres
                props.setForm(0)
        }
        else(
                alert('Provided invalid value:\n' + invalidData)
        )
    }
}    

