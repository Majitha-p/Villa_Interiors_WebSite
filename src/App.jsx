import { useState } from 'react'
import Navbar from './layouts/Navbar';
import Hero from './sections/Hero';
import ChatWidgetButton from "./components/ChatWidgetButton";
import Service from './sections/Service';
import WhyDifficult from './sections/WhyDifficult';
import DesignYourVilla from './sections/DesignYourVilla';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';
import SendMail from './sections/SendMail';
import Footer from './layouts/Footer';

function App() {

  return (
    <div className="App">

      <Navbar />
      <main>
        <Hero />
        <Service />
        <WhyDifficult />
        <DesignYourVilla />
        <Projects />
        <Contact />
        <Testimonials />
        <SendMail />
        <Footer />

        {/* Global Chat Button */}
        <ChatWidgetButton />
      </main>


    </div>

  );
}

export default App
