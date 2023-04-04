import users_DB from '../../data/Users'
import {useState} from 'react'

export default function SideForm(props) {
    const [loginID, setLoginID] = useState('')
    const [loginPass, setLoginPass] = useState('')

    return (
    <form className="side-form">
            <h3> Login </h3>

            <h6> UserID </h6>
            <input  type="text" 
                    onChange={ e=>setLoginID(e.target.value) }
                    value={loginID} />

            <h6> Password </h6>
            <input  type="password"
                    onChange={ e=>setLoginPass(e.target.value) }
                    value={loginPass} />

            <button type="submit" onClick={hanvleLogin}> Login </button>
    </form>        
    )

    function hanvleLogin(event){
        event.preventDefault();
        const user = users_DB.filter( u => { return u.userID === loginID} )[0]
        user === undefined          ? alert('Wrong userID') :
        user.password === loginPass ? login(loginID) : alert('Wrong password')
    }
    
    function login(name){
        props.setLoggedIn(true)
        props.setUser(name)
        props.setForm(0)
    }
}    
