import React from 'react'
import { validation } from './validation.js'

export default function Form() {
    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    })


    function handleInputChange(e) {
        setUserData({...userData, [e.target.name]: e.target.value});
        setErrors(validation({...userData, [e.target.name]: e.target.value}))
    }


  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input
            id="username"
            name="username"
            placeholder="Ingrese el usuario..."
            type="text"
            value={userData.username}
            onChange={handleInputChange}
        />
        <p>{errors.name}</p>
        <label htmlFor="password">Password:</label>
        <input
            id="password"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
        />
        <p>{errors.password}</p>
        <input type="submit"/>
      </form>
    </div>
  )
}
