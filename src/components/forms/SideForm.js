import '../../styles/side-sections.css'
import LoginForm from './LoginForm'
import EditCustomerForm from './EditCustomerForm'
import AddCustomerForm from './AddCustomerForm'
import UpperBar from './UpperBar'

export default function SideForm(props) {
    return (
    <div className="side-panel">
        <UpperBar setForm = {props.setForm}/>
        { 
            props.selectedForm === 1 ?   <LoginForm setUser={props.setUser}     
                                                    setLoggedIn={props.setLoggedIn}
                                                    setForm = {props.setForm} />:
            props.selectedForm === 2 ?   <EditCustomerForm   Customers_db = {props.Customers_db}   
                                                            setCustomer_db={props.setCustomer_db}
                                                            ID = {props.activeID}
                                                            setForm = {props.setForm} />:
            props.selectedForm === 3 ?   <AddCustomerForm    Customers_db={props.Customers_db}
                                                            setCustomer_db={props.setCustomer_db}
                                                            setForm = {props.setForm}/> :
            <div id='blank-form'> </div>
        }
    </div>        
)}    
