import './App.css'
// import { Routes, Route } from 'react-router-dom'
// import Features from './components/pages/Features'
// import Services from './components/pages/Services'
// import About from './components/pages/About'
// import FAQsPage from './components/pages/FAQs'
// import Contact from './components/pages/Contact'
import Navbar from './components/molecules/Navbar/Navbar';
import Hero from './components/molecules/Hero/Hero';
import Aliance from './components/molecules/Colaborators/Aliance';
import SectionPage from './components/templates/InfoSection/Section';
import FAQs from './components/molecules/FAQs/FAQs';
import Card from './components/molecules/Card/Card';
import Footer from './components/templates/Footer/Footer';
import Contact from './components/molecules/Contact/Contact';

export default function App() {

  return (
    // <Routes>
    //   <Route index element={<Features/>}/>
    //   <Route path='/services' element={<Services/>}/>
    //   <Route path='/about' element={<About/>}/>
    //   <Route path='/faqs' element={<FAQsPage/>}/>
    //   <Route path='/contact' element={<Contact/>}/>
    // </Routes>
    <>
    <Navbar/>
    <Hero/>
    <Aliance/>
    <SectionPage/>
    <FAQs/>
    <Card/>
    <Contact/>
    <Footer/>
    </>
  )
}