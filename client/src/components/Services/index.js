import React from 'react'
import { Link } from 'react-scroll'
import Grupo from '../img/grupo1.svg'
import Grupo2 from '../img/Grupo2.svg'
import Grupo3 from '../img/Mono3.svg'
import Grupo4 from '../img/Auto4.svg'
import './style.css'

export const Services = ({focusInput}) => {

    const focusD = _ => {
        setTimeout( _ => {
            focusInput()
        }, 500)
    } 

    //Probando google analytics
    const famiEvent = () =>{
        focusD();
        window.gtag('event', 'click', {'event_category': 'boton', 'event_label': 'familia'});
    }
    const depeEvent = () =>{
        focusD();
        window.gtag('event', 'click', {'event_category': 'boton', 'event_label': 'en_blanco'});
    }
    const monoEvent = () =>{
        focusD();
        window.gtag('event', 'click', {'event_category': 'boton', 'event_label': 'monotributistas'});
    }
    const autoEvent = () =>{
        focusD();
        window.gtag('event', 'click', {'event_category': 'boton', 'event_label': 'autonomos'});
    }
    


    
    return (
        <div className="servicesContainer">
		<h2>¡Sí, todos son BIENVENIDOS!</h2>
		<div className="servicesWrapper">

			<div className="serviceElement">
				<div className="imgContainer">
                    <img src={Grupo} alt=''/>					
				</div>
				<h3>Grupo Familiar</h3>
				<Link onClick={famiEvent} to="nav" smooth={true} duration={700}>QUIERO COTIZAR</Link>				
			</div>


			<div className="serviceElement ser2">
				<div className="imgContainer">
                    <img src={Grupo2} alt=''/>							
				</div>
				<h3 className='card2'>En Relación de <br/>Dependencia</h3>
				<Link onClick={depeEvent} className='link' to="nav"  smooth={true} duration={700}>QUIERO COTIZAR</Link>				
			</div>


			<div className="serviceElement">
				<div className="imgContainer">
                    <img src={Grupo3} alt=''/>					
				</div>
				<h3>Monotributistas</h3>
				<Link onClick={monoEvent} to="nav" smooth={true} duration={700}>QUIERO COTIZAR</Link>			
			</div>


			<div className="serviceElement">
				<div className="imgContainer">					
                    <img src={Grupo4} alt=''/>					
				</div>
				<h3>Autónomos</h3>
				<Link onClick={autoEvent} to="nav" smooth={true} duration={700}>QUIERO COTIZAR</Link>			
			</div>
			
		</div>
		
	</div>

    )
}
