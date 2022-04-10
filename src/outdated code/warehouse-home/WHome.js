import React from 'react';
import './warehouse-home.css';

const WHome = () => {
	return (
		<div className='WHome'>
			<section className='head'>
				<link rel='stylesheet' href='warehouse-home.css' />
			</section>

			<div className='row col-12 align-items-center m-0 d-flex flex-column flex-wrap flex-xl-row align-items-xl-start'>
				<div className='col-8 col-xl-6 p-4'>
					<div
						id='user-info'
						className='info rounded d-flex justify-content-center align-items-center m-0'>
						<ul className='list-group d-flex flex-column justify-content-evenly'>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>ID</span>
								<span>45</span>
							</li>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Name</span>
								<span>Mustafa Yıldırım</span>
							</li>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Email</span>
								<span>m_yildirim@foo.com</span>
							</li>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Register No</span>
								<span>77146134613</span>
							</li>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Role</span>
								<span>Warehouse Worker</span>
							</li>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='list-attr'>Warehouse</span>
								<span>Çiğli</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='col-8 col-xl-6 p-4 d-flex flex-column'>
					<div className='row d-flex justify-content-center'>
						<div
							id='order-info'
							className='info col-8 rounded d-flex flex-wrap justify-content-center align-items-center p-4'>
							<div className='col-12 d-flex justify-content-between m-0 px-0 pb-4'>
								<span className='list-attr'>STATUS</span>
								<span className='list-attr'>COUNT</span>
							</div>
							<ul className='col-12 list-group d-flex flex-column justify-content-evenly'>
								<li className='list-group-item d-flex justify-content-between pb-2'>
									<span className='list-attr'>Shipping to Warehouse</span>
									<span>2</span>
								</li>
								<li className='list-group-item d-flex justify-content-between'>
									<span className='list-attr'>Waiting for Delivery</span>
									<span>1</span>
								</li>
							</ul>
						</div>
					</div>
					<div className='row d-flex justify-content-center my-auto'>
						<div
							id='supply-order-info'
							className='info col-8 rounded d-flex flex-wrap justify-content-center align-items-center p-4'>
							<ul className='col-12 list-group d-flex flex-column justify-content-evenly'>
								<li className='list-group-item d-flex justify-content-between'>
									<span className='list-attr'>Awaiting Supply Orders</span>
									<span>2</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WHome;
