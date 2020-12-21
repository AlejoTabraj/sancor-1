import './App.css';
import { useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroFooter } from './components/HeroFooter';
import { Services } from './components/Services';
import { Beneficios } from './components/Beneficios';

function App() {
     const inputRef = useRef();
     const focusInput = _ =>{
        inputRef.current.focus()
    }

    useEffect(()=>{
        focusInput()
    }, [])
  return (
    <div >
        <div className='back'>
        <Navbar/>
        <Hero inputRef={inputRef}/>
        </div>
        <HeroFooter/>
        <Services focusInput={focusInput}/>
        <Beneficios/>
    </div>
  );
}

export default App;

