import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Qualication</th>
								<th>Board</th>
								<th>Year</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>PG-Diploma</td>
								<td>CDAC Hyderabad</td>
								<td>2021</td>
								{/* <td>
									<Link to='/LINK' class='btn blue lighten-2'>
										View
									</Link>
								</td> */}
							</tr>
							<tr>
								<td>Bachelor of Engineering</td>
								<td>Nagpur University</td>
								<td>2018</td>
						
								{/* <td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td> */}
							</tr>
							<tr>
								<td>HSC</td>
								<td>Maharastra Board</td>
								<td>2014</td>
								{/* <td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td> */}
							</tr>
							<tr>
								<td>SSC</td>
								<td>CBSE</td>
								<td>2012</td>
								{/* <td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td> */}
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
