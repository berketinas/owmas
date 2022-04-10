import React from 'react';
import '../../components/table.css';

const FOrders = () => {
	return (
		<div className='f-orders'>
			<section className='head'>
				<link rel='stylesheet' href='table.css' />
			</section>

			<section className='dp-head d-flex justify-content-between align-items-center'>
				<h1 className='display-6 d-inline px-3'>Orders</h1>
			</section>

			<section className='dp-table table-responsive mx-3 border border-dark rounded'>
				<table className='table table-borderless m-0'>
					<thead>
						<tr>
							<th className='text-center' scope='col'>
								Action
							</th>
							<th className='text-center' scope='col'>
								ID
							</th>
							<th className='text-center' scope='col'>
								Customer
							</th>
							<th className='text-center' scope='col'>
								Creation Date
							</th>
							<th className='text-center' scope='col'>
								Products
							</th>
							<th className='text-center' scope='col'>
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span className='d-flex justify-content-evenly'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-arrow-down-up'
										viewBox='0 0 16 16'>
										<path
											fill-rule='evenodd'
											d='M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z'
										/>
									</svg>
								</span>
							</td>
							<td>1126</td>
							<td>Yusuf Akçura</td>
							<td>02/12/2021</td>
							<td>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item d-flex justify-content-between'>
										Writing Pad
										<span className='badge bg-primary bg-pill px-3 py-2'>
											10
										</span>
									</li>
									<li className='list-group-item d-flex justify-content-between'>
										Calendar
										<span className='badge bg-primary bg-pill px-3 py-2'>
											5
										</span>
									</li>
									<li className='list-group-item d-flex justify-content-between'>
										Mug
										<span className='badge bg-primary bg-pill px-3 py-2'>
											250
										</span>
									</li>
								</ul>
							</td>
							<td>Awaiting Design</td>
						</tr>
						<tr>
							<td>
								<span className='d-flex justify-content-evenly'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-arrow-down-up'
										viewBox='0 0 16 16'>
										<path
											fill-rule='evenodd'
											d='M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z'
										/>
									</svg>
								</span>
							</td>
							<td>1711</td>
							<td>Halide Edip Adıvar</td>
							<td>02/12/2021</td>
							<td>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item d-flex justify-content-between'>
										Kraft Bag
										<span className='badge bg-primary bg-pill px-3 py-2'>
											5
										</span>
									</li>
								</ul>
							</td>
							<td>Shipping to Warehouse</td>
						</tr>
						<tr>
							<td>
								<span className='d-flex justify-content-evenly'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-arrow-down-up'
										viewBox='0 0 16 16'>
										<path
											fill-rule='evenodd'
											d='M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z'
										/>
									</svg>
								</span>
							</td>
							<td>1567</td>
							<td>Melih Cevdet Anday</td>
							<td>02/12/2021</td>
							<td>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item d-flex justify-content-between'>
										Sticker
										<span className='badge bg-primary bg-pill px-3 py-2'>
											150
										</span>
									</li>
									<li className='list-group-item d-flex justify-content-between'>
										Brochure
										<span className='badge bg-primary bg-pill px-3 py-2'>
											80
										</span>
									</li>
								</ul>
							</td>
							<td>Awaiting Delivery</td>
						</tr>
						<tr>
							<td>
								<span className='d-flex justify-content-evenly'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-arrow-down-up'
										viewBox='0 0 16 16'>
										<path
											fill-rule='evenodd'
											d='M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z'
										/>
									</svg>
								</span>
							</td>
							<td>1231</td>
							<td>Ahmet Cemal</td>
							<td>02/12/2021</td>
							<td>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item d-flex justify-content-between'>
										Notebook
										<span className='badge bg-primary bg-pill px-3 py-2'>
											10
										</span>
									</li>
									<li className='list-group-item d-flex justify-content-between'>
										Brochure
										<span className='badge bg-primary bg-pill px-3 py-2'>
											5
										</span>
									</li>
									<li className='list-group-item d-flex justify-content-between'>
										Cardboard Bag
										<span className='badge bg-primary bg-pill px-3 py-2'>
											250
										</span>
									</li>
								</ul>
							</td>
							<td>Awaiting Production</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default FOrders;
