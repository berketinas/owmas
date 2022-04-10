import React from 'react';
import '../../components/table.css';

const FSupplies = () => {
	return (
		<div className='f-supplies'>
			<section className='head'>
				<link rel='stylesheet' href='table.css' />
			</section>

			<section className='dp-head d-flex justify-content-between align-items-center'>
				<h1 className='display-6 d-inline px-3'>Supplies</h1>
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
								Category
							</th>
							<th className='text-center' scope='col'>
								Name
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
										class='bi bi-plus-circle'
										viewBox='0 0 16 16'>
										<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
										<path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
									</svg>
								</span>
							</td>
							<td>421</td>
							<td>Raw</td>
							<td>Faux Leather (10m x 5m)</td>
						</tr>
						<tr>
							<td>
								<span className='d-flex justify-content-evenly'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-plus-circle'
										viewBox='0 0 16 16'>
										<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
										<path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
									</svg>
								</span>
							</td>
							<td>420</td>
							<td>Raw</td>
							<td>Rope (15m)</td>
						</tr>
						<tr>
							<td>
								<span className='d-flex justify-content-evenly'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-plus-circle'
										viewBox='0 0 16 16'>
										<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
										<path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
									</svg>
								</span>
							</td>
							<td>419</td>
							<td>Ink</td>
							<td>62XL Tri-Color Ink</td>
						</tr>
						<tr>
							<td>
								<span className='d-flex justify-content-evenly'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-plus-circle'
										viewBox='0 0 16 16'>
										<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
										<path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
									</svg>
								</span>
							</td>
							<td>418</td>
							<td>Ink</td>
							<td>HP 712B Black Ink</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default FSupplies;
