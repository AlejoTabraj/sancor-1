import React from 'react'
import './style.css'
import sancor from '../img/logo.png'
export const Navbar = () => {
    return (
    <header className="navWrapper">
		<nav className="nav">
			<img src={sancor} alt='sancor logo'/>		
			<div className="navLinkWrap">
				<ul>
					<li><a href="https://www.sancorsalud.com.ar/contacto">SOY ASOCIADO</a></li>
				</ul>
			</div>
		</nav>
	</header>
    )
}
