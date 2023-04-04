import '../../styles/sections.css'
import ShowMoreIcon  from '../../images/down-arrow.png'
import AddIcon from '../../images/more.png'
import SectionTable from './SectionTable'
import {useState} from 'react'


export default function SingleSection(props) {
    const [visable, setVisable] = useState( false );

    return (
    <div>
        <div  className='single-section'>
            <div className='section-element'> 
                <img src={props.sectionIcon} alt='SectionIcon' />
                <h1> {props.sectionName} </h1>
            </div>

            <div className='section-element'> 
                <button onClick={handleShow} > 
                    <img    src={ShowMoreIcon} alt='ShowMore' 
                            style={{ transform: visable ? `rotate(${180}deg)` : `rotate(${0}deg)`, transitionDuration: `${100}ms` }}/> 
                            { visable ? 'Show less' : 'Show more' }
                </button>
                <button onClick={handleAdd}> 
                    <img src={AddIcon} alt='Add' /> 
                    Add 
                </button>
            </div>
        </div >
        <div style={{ display: visable && props.isLoggedIn ? 'block' : 'none' }}>
            <SectionTable   cells = {props.cells}     rows = {props.rows} 
                            setForm = {props.setForm} editNumber = {props.editNumber}
                            activeID = {props.activeID} setActiveID = {props.setActiveID}
                            updateDB = {props.updateDB} selectedForm = {props.selectedForm}
                            />
        </div>
    </div>        
)
    function handleShow(event){
        event.preventDefault()
        props.isLoggedIn === true ? setVisable(!visable) : alert('Only for logged user')
    }

    function handleAdd(event){
        event.preventDefault()
        props.isLoggedIn === true ? props.setForm(props.addNumber): alert('Only for logged user')
    }
}    
