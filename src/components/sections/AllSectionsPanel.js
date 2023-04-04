import '../../styles/sections.css'
import SingleSection from './SingleSection'
import CustomersIcon from '../../images/customers.png'

export default function AllSectionsPanel(props) {

    return (
    <div  id='all-sections'>
        <SingleSection  sectionName='Customers'      sectionIcon={CustomersIcon}
                        cells={customersCells}       rows={props.Customers_db}
                        activeID = {props.activeID} setActiveID = {props.setActiveID}
                        setForm = {props.setForm}   updateDB = {props.setCustomer_db}
                        addNumber = {3} editNumber = {2} selectedForm = {props.selectedForm}
                        isLoggedIn={props.isLoggedIn}/>
    </div >
)}    

const customersCells = ['ID', 'Name', 'VAT identification number', 'Creation date', 'Addres'];
