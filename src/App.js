import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav.jsx'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import About from './components/about/About.jsx'
import Detail from './components/detail/Detail.jsx' 
import Form from './components/form/Form'

function App () {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'srjmendoza@hotmail.com';
  const password = 'SoyHenry2022';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrecta')
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else { 
            window.alert('No hay personajes con ese ID');
          }
      });     
 }
  
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/> 
      </Routes>
      <div>
        
      </div>
    </div>
  )
}

export default App
