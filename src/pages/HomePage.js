import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

class HomePage extends React.Component {
    render() {
        return(
            <div>
            <Hero />
            <About />
            <Contact />
            </div>
        )
    }
}

export default HomePage;