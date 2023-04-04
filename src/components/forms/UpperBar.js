import '../../styles/side-sections.css'
import CancelIcon from '../../images/cancel.png'


export default function UpperBar(props) {
    return (
    <div className="upper-bar">
        { 
            <button type="submit" onClick={handleSubmit}> 
                <img src={CancelIcon} alt='Delete' />
            </button>
        }
    </div>        
)

function handleSubmit(event) {
    event.preventDefault()
    props.setForm(0)
}

}    

