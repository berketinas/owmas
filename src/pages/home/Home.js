import React from 'react';
import './home.css';

const Home = ({ privilege, user }) => {
	return (
		<div className='Home'>
			<div className='row col-12 align-items-center m-0 d-flex flex-column flex-xl-row align-items-xl-start'>
				<div className='col-8 col-xl-6 p-4'>
					<div
						id='user-info'
						className='info rounded d-flex justify-content-center align-items-center m-0 shadow'>
						<ul className='list-group d-flex flex-column justify-content-evenly'>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>ID</span>
								<span>{user.id}</span>
							</li>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Name</span>
								<span>{`${user.firstName} ${user.lastName}`}</span>
							</li>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Email</span>
								<span>{user.email}</span>
							</li>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Register No</span>
								<span>R No.</span>
							</li>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Role</span>
								<span>{user.role}</span>
							</li>
							{ (privilege == 1) ? 
                                <li className='list-group-item d-flex justify-content-between'>
								    <span className='list-attr'>Office</span>
								    <span>{user.building.name}</span>
							    </li> : ''}
							{ (privilege == 2) ? <li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Factory</span>
								<span>{user.building.name}</span>
							</li> : ''}
							{ (privilege == 1) ? '' : <li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Warehouse</span>
								<span>{user.building.name}</span>
							</li>}
						</ul>
					</div>
				</div>
				<div className='col-8 col-xl-6 p-4 d-flex flex-column'>
					<div className='row d-flex justify-content-center'>
						<div
							id='order-info'
							className='info col-8 rounded d-flex flex-wrap justify-content-center align-items-center p-4 shadow'>
							<div className='col-12 d-flex justify-content-between m-0 px-0 pb-4'>
								<span className='list-attr'>STATUS</span>
								<span className='list-attr'>COUNT</span>
							</div>
							<ul className='col-12 list-group d-flex flex-column justify-content-evenly'>
                                { (privilege == 1) ? <li className='list-group-item d-flex justify-content-between pt-1'>
									<span className='list-attr'>Awaiting Design</span>
									<span>amount</span>
								</li> : '' }
								{ (privilege == 3) ? '' : <li className='list-group-item d-flex justify-content-between pt-4'>
									<span className='list-attr'>Awaiting Production</span>
									<span>amount</span>
								</li> }
								<li className='list-group-item d-flex justify-content-between pt-4'>
									<span className='list-attr'>In Shipment</span>
									<span>amount</span>
								</li>
								{ (privilege == 2) ? '' : <li className='list-group-item d-flex justify-content-between pt-4'>
									<span className='list-attr'>Awaiting Delivery</span>
									<span>amount</span>
								</li> }
							</ul>
						</div>
					</div>
					{ (privilege == 1) ? '' : 
                    <div className='row d-flex justify-content-center my-auto'>
						<div
							id='supply-order-info'
							className='info col-8 rounded d-flex flex-wrap justify-content-center align-items-center p-4 shadow'>
							<ul className='col-12 list-group d-flex flex-column justify-content-evenly'>
								<li className='list-group-item d-flex justify-content-between'>
									<span className='list-attr'>Awaiting Supply Orders</span>
									<span>amount</span>
								</li>
							</ul>
						</div>
					</div>}
				</div>
			</div>
		</div>
	)
}

export default Home
