import '../styles/side-sections.css'
import AllSectionsPanel from './sections/AllSectionsPanel'
import SideForm from './forms/SideForm'
import {useState} from 'react'



export default function AppContent(props) {
    console.log('props.selectedForm: ' + props.selectedForm)
    const [activeID, setActiveID] = useState( 0 );

    return (
    <div className="main-content">
       <AllSectionsPanel    Customers_db = {props.Customers_db}   setCustomer_db = {props.setCustomer_db}
                            setForm = {props.setForm}   isLoggedIn={props.isLoggedIn}   activeID = {activeID}       
                            setActiveID = {setActiveID} selectedForm = {props.selectedForm} />

       { props.selectedForm !== 0 ? <SideForm   setForm = {props.setForm}
                                                setUser = {props.setUser}
                                                activeID = {activeID}
                                                setLoggedIn = {props.setLoggedIn}
                                                selectedForm = {props.selectedForm}
                                                Customers_db = {props.Customers_db}   
                                                setCustomer_db = {props.setCustomer_db}/> 
                                :   <div></div> }
    </div>        
)}    
