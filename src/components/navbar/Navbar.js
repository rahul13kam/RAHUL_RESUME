import React, { Component } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
// import { Hasha as a } from 'react-router-hash-a';

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='light-blue darken-4'>
					<div className='container'>
						<div className='nav-wrapper'>
							<a href='#' className='brand-logo'>
								My CV
							</a>
							<a href='#' data-target='side-nav' className='sidenav-trigger'>
							{/* <a href='/' data-target='side-nav' className='sidenav-trigger'> */}
								<i className='material-icons'>menu</i>
							</a>
							<ul className='right hide-on-med-and-down'>
								<li>
									<a href='#'>
									{/* <a href='/'> */}
										<i class='fas fa-home'></i> Home
									</a>
								</li>
								<li>
								    <a href='#'>
									{/* <a href='/skills'> */}
										<i class='fas fa-copy'></i> Skills
									</a>
								</li>
								<li>
									<a href='#'>
									{/* <a href='/experiences'> */}
										<i class='fas fa-id-badge'></i> Experiences
									</a>
								</li>
								<li>
									{/* <a href='/educations'> */}
									<a href='#'>
										<i class='fas fa-graduation-cap'></i> Educations
									</a>
								</li>
								<li>
									<a href='#'>
									{/* a href='/portfolios'> */}
										<i class='fas fa-address-card'></i> Portfolios
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<ul className='sidenav' id='side-nav'>
					<li>
						<a href='#'>
						{/* <a href='/'> */}
							<i class='fas fa-home'></i> Home
						</a>
					</li>
					<li>
						<a href='#'>
						{/* a href='/skills'> */}
							<i class='fas fa-copy'></i> Skills
						</a>
					</li>
					<li>
						<a href='#'>
						{/* <a href='/experiences'> */}
							<i class='fas fa-id-badge'></i> Experiences
						</a>
					</li>
					<li>
						<a href='#'>
						{/* <a href='/educations'> */}
							<i class='fas fa-graduation-cap'></i> Educations
						</a>
					</li>
					<li>
						<a href='#'>
						{/* <a href='/portfolios'> */}
							<i class='fas fa-address-card'></i> Portfolios
						</a>
					</li>
				</ul>
			</>
		);
	}
}
