import React, { useState} from 'react'
import axios from 'axios'
import Offer from '../img/30_OFF.svg'
import Arrow from '../img/left-arrow.svg'

import './style.css'



export const Hero = () => {
    const [telephone, setTelephone] = useState(0);
    const [cargando, setCargando] = useState(false);
    const [gracias, setGracias] = useState(false);

    

    const handleSubmit = async(e) =>{
         setCargando(true);

        e.preventDefault();
         
        await axios.post(`https://sancor-test.herokuapp.com`, { telephone })
        setCargando(false);
        setGracias(true);
        setTimeout(() =>{
            setGracias(false)
        }, 800)
        e.target.reset();

    }
    return (
    <section className="heroWrapper">
		<div>
		<form className="heroFormWrapper" onSubmit={handleSubmit}>            
			<h2>¡Ingresá tu número <br/> y corizá tu plan ideal!</h2>	
			<input onChange={e => setTelephone(e.target.value)} type="tel" name="telefono" placeholder="Ej. 1123563009(sin0)"/>
            <button type='submit'>
            {cargando ? 'Cargando...': (gracias ? 'Listo': '¡COTIZÁ!')}
            </button>
		</form>	
          <div>
            <div className='arrow'>
                <img src={Arrow} alt='flecha'></img>
            </div>
			<div className="circleWrap">				
				<div className="circle">$0.00</div>				
			</div>
           </div> 	
		</div>
		<div className="heroOfferWrapper">
            <img src={Offer} alt='oferta'/>
			{/*<div className="heroOffer">
				<h2>30<br/>OFF</h2>
				<p>%</p>
			</div>
    <p>EN TODOS<br/>LOS PLANES</p>			*/}
		</div>
		
	</section>
    
    )
}
