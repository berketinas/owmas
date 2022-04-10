import React from 'react';
import '../../components/table.css';

const FRequests = () => {
	return (
		<div className='f-requests'>
			<section className='head'>
				<link rel='stylesheet' href='table.css' />
			</section>

			<section className='dp-head d-flex justify-content-between align-items-center'>
				<h1 className='display-6 d-inline px-3'>Supply Requests</h1>
				{/* <a href='#'>
					<span className='px-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='2rem'
							height='2rem'
							fill='currentColor'
							className='bi bi-plus-square'
							viewBox='0 0 16 16'>
							<path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
							<path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
						</svg>
					</span>
				</a> */}
			</section>

			<section className='dp-table table-responsive mx-3 border border-dark rounded'>
				<table className='table table-borderless m-0'>
					<thead>
						<tr>
							<th className='text-center' scope='col'>
								ID
							</th>
							<th className='text-center' scope='col'>
								Supply
							</th>
							<th className='text-center' scope='col'>
								Amount
							</th>
							<th className='text-center' scope='col'>
								Request Date
							</th>
							<th className='text-center' scope='col'>
								Completion Date
							</th>
							<th className='text-center' scope='col'>
								Factory
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1134</td>
							<td>Cardboard (1mm A4 21 x 29.7 cm)</td>
							<td>150</td>
							<td>18/12/2021</td>
							<td>N/A</td>
							<td>Menderes</td>
						</tr>
						<tr>
							<td>1145</td>
							<td>Faux Leather (10m x 5m)</td>
							<td>8</td>
							<td>18/12/2021</td>
							<td>20/12/2021</td>
							<td>Alsancak 2</td>
						</tr>
						<tr>
							<td>1167</td>
							<td>HP 712B Black Ink (80ml)</td>
							<td>10</td>
							<td>02/12/2021</td>
							<td>N/A</td>
							<td>Alsancak 2</td>
						</tr>
						<tr>
							<td>1166</td>
							<td>HP 712B Black Ink (80ml)</td>
							<td>12</td>
							<td>02/12/2021</td>
							<td>N/A</td>
							<td>Konak</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default FRequests;
