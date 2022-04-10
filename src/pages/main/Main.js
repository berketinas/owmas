import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './main.css';
import { Header, Sidebar, Tables } from '../../components'
import { Home, Reports } from '..'

const Main = () => {
    const { state } = useLocation()
    
    const [active, setActive] = useState(1)

    const [show, setShow] = useState(0);

    const handleClose = (modalId) => setShow(modalId);
    const handleShow = (modalId) => {console.log(modalId); setShow(modalId);}
    
    const updateActive = (value) => {
        setActive(value)
        handleClose(0)
    }

    const findContent = (active, privilege, user) => {
        if(privilege === 1) {
            if(active === 1) {
                return ( <Home privilege={privilege} user={user} /> )
            } else if(active === 4) {
                return ( <Reports /> )
            } else if(active === 9) {
                
            } else {
                return ( <Tables token={user.token} privilege={privilege} tableId={active} handleClose={handleClose} handleShow={handleShow} show={show} /> )
            }
        } else if(privilege === 2) {
            if(active === 1) {
                return ( <Home privilege={privilege} user={user} /> )
            } else if(active === 9) {
                
            } else {
                return ( <Tables token={user.token} privilege={privilege} tableId={active} handleClose={handleClose} handleShow={handleShow} show={show} /> )
            }
        } else if(privilege === 3) {
            if(active === 1) {
                return ( <Home privilege={privilege} user={user}/> )
            } else if(active === 9) {
                
            } else {
                return ( <Tables token={user.token} privilege={privilege} tableId={active} handleClose={handleClose} handleShow={handleShow} show={show} /> )
            }
        }
    }

	return (
		<div className='main'>
			<section className='head'>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap'
					rel='stylesheet'
				/>
			</section>

			<section className='body d-flex flex-wrap m-0 p-0'>
				<header className='header container-fluid px-0 mx-0 d-flex justify-content-end position-absolute'>
					<Header name={`${state.user.firstName} ${state.user.lastName}`} role={`${state.user.role}`} privilege={`${state.privilege}`}/>
				</header>

				<section className='sidebar container px-0 mx-0 position-sticky'>
					<Sidebar privilege={`${state.privilege}`} active={active} updateActive={updateActive}/>
				</section>

				<section className='secondary-body container-fluid position-absolute'>
					<article className='main-content container-fluid p-0'>
						 {findContent(active, state.privilege, state.user, handleShow, show)}
					</article>
				</section>

				<script src='bootstrap/js/bootstrap.min.js'></script>
			</section>
		</div>
	)
}

export default Main
