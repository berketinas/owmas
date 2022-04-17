import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'

const Header = (props) => {
	const navigate = useNavigate()

	return (
		<div>
			<section className='header-body px-0 mx-0'>
				<div className='signout container d-flex flex-column justify-content-between pb-0 pt-3 px-3'>
					<div className='row m-0'>
						<div className='nametag px-1'>
							<p className='list-attr'>{props.name}</p>
							<p>{props.role} {props.privilege}</p>
						</div>
					</div>
					<div className='row m-0 d-flex justify-content-end'>
						<button
							className='btn-primary rounded px-2 mt-4 mx-1'
							onClick={() => navigate('/')}>
							Sign Out
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Header
