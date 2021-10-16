import React from 'react';
// import { Hasha as a } from 'react-router-hash-a';

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
								<td>
									{/* <a href='/a' class='btn blue lighten-2'> */}
									<a href='#' class='btn blue lighten-2'>
										View
									</a>
								</td>
							</tr>
							<tr>
								<td>Bachelor of Engineering</td>
								<td>Nagpur University</td>
								<td>2018</td>
						
								<td>
									{/* <a href='/details' class='btn blue lighten-2'> */}
									<a href='#' class='btn blue lighten-2'>
										View
									</a>
								</td>
							</tr>
							<tr>
								<td>HSC</td>
								<td>Maharastra Board</td>
								<td>2014</td>
								<td>
									{/* <a href='/details' class='btn blue lighten-2'> */}
									<a href='#' class='btn blue lighten-2'>
										View
									</a>
								</td>
							</tr>
							<tr>
								<td>SSC</td>
								<td>CBSE</td>
								<td>2012</td>
								<td>
									{/* <a href='/details' class='btn blue lighten-2'> */}
									<a href='#' class='btn blue lighten-2'>
										View
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
