import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroFooter } from './components/HeroFooter';
import { Services } from './components/Services';
import { Beneficios } from './components/Beneficios';

function App() {
  return (
    <div >
        <div className='back'>
        <Navbar/>
        <Hero/>
        </div>
        <HeroFooter/>
        <Services/>
        <Beneficios/>
    </div>
  );
}

export default App;

