import '../src/styles/App.css';
import HeaderBar from './components/header/HeaderBar'
import AppContent from './components/AppContent'
import {useState} from 'react'

import customers from './data/Customers.js'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [selectedForm, setForm] = useState( 0 )
  const [user, setUser] = useState( '' )

  const [Customers_db, setCustomer_db] = useState( customers )

  return (
    <div id="App">
      <HeaderBar  isLoggedIn={isLoggedIn} setForm={setForm}
                  user={user} setUser={setUser} 
                  setLoggedIn={setLoggedIn} />

      <AppContent setLoggedIn={setLoggedIn}     isLoggedIn={isLoggedIn}
                  selectedForm={selectedForm}   setForm={setForm} setUser={setUser}
                  Customers_db = {Customers_db}   setCustomer_db={setCustomer_db}/>
    </div>
  );
}

export default App;
