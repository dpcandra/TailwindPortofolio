import './App.css'

import Hero from './Hero';
import About from './About';
import Header from './Components/Header';
import Portofolio from './Portofolio';
import Clients from './Clients';
import Blogs from './Blogs';
import Contact from './contact';
import Footer from './Footer';

function App() {
  

  return (
    <>
      <Header/>

       <Hero/>
       <About/>
       <Portofolio/>
       <Clients/>
       <Blogs/>
       <Contact/>

       <Footer/>
    </>
  )
}

export default App
