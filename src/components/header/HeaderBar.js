import '../../styles/header-bar.css'
import LoginIcon from '../../images/login.png'
import LogoutIcon from '../../images/logout.png'
import AppIcon from '../../images/customer.png'

export default function HeaderBar(props) {
    console.log('props.user' )
    console.log(props.user )
    console.log('props.isLoggedIn' )
    console.log(props.isLoggedIn )



    return (
    <header id="header-bar" >
        <div>
            <img src={AppIcon} alt='Back to main page' />
            <h1>  MyCustomersApp </h1> 
        </div>
        {  props.isLoggedIn  ? 
            <div>
                <h6> {props.user} </h6>
                <button onClick={handleLogout}> <img src={LogoutIcon} alt='Logout' /> Log out </button>
            </div>
            :            
                <button onClick={handleLogin}> <img src={LoginIcon} alt='Login' /> Log in </button> 
        }
    </header >
)

function handleLogin(event) {
    event.preventDefault()
    props.setForm(1)
}

function handleLogout(event) {
    event.preventDefault()
    props.setForm(0)
    props.setUser('')
    props.setLoggedIn(false)
}
}    
