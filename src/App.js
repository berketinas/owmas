import './bootstrap/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Main } from './pages'


function App() {
    const navigate = useNavigate()
    
    var privilege = 0

    const PostUser = async (user) => {
        const verification = 
            { 
                token: '',
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                role: '',
                building: '',
            }

        const response = await fetch('https://operational-workflow.herokuapp.com/api/auth/signin/',
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json', },
                body: JSON.stringify({ username: user.email, password: user.password })
            }).then(response => response.json())
                .then(data => {
                    verification.token = data.token
                    verification.id = data.id
                    verification.firstName = data.firstName
                    verification.lastName = data.lastName
                    verification.email = data.email
                    verification.role = data.roles[0] == 'ROLE_OFFICE_WORKER' ? 'Office Worker' : (data.roles[0] == 'ROLE_WAREHOUSE_WORKER' ? 'Warehouse Worker' : 'Factory Worker')
                    verification.building = data.building
                })
                    .catch(error => console.log(error))


        privilege = (verification.role === 'Office Worker') ? 1 : ((verification.role === 'Warehouse Worker') ? 3 : 2)
        console.log(verification)
        navigate('/home', { state: { 
            privilege: privilege,
            user: verification,
        } })
    }

    const onLogin = (user) => {
        PostUser(user)
    }

    return (
            <Routes>
                <Route exact path='/' element={ <Login onLogin={onLogin} /> }/>
                <Route exact path='/home' element={ <Main /> }/>
            </Routes>
    )
}

export default App
