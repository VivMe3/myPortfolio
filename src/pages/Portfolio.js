import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import DigitalImg from '../imgs/digital.png';
import HandDoneGraphic from '../imgs/hand.png';
import TechnicaLogo from '../imgs/technica-circle.png';
import VideoGraphic from '../imgs/play-pause.png';
import SculpeyLogo from '../imgs/Sculpeylll-logo.png';

class Portfolio extends React.Component {
componentDidMount() {
    window.scrollTo(0,0);
}


render() {
    return (
        <div>
            <section>
                <h2 className="title">Works I've done</h2>
            </section>

            <section className="padded">
                <div className="container ">
                    <div className="row wrap">
                        <PortfolioItem 
                            path="/portfolio/graphic-design" 
                            image={DigitalImg} 
                            altText="Digital Graphic" 
                            custom={{width: '90%'}}
                            color="green" 
                            name="Graphic Design" >
                        </PortfolioItem>

                        
                        <PortfolioItem 
                            path="/portfolio/hand-done" 
                            image={HandDoneGraphic} 
                            altText="Hand Done Graphic" 
                            custom={{width: '90%'}}
                            color="brown" 
                            name="Hand Done" >
                        </PortfolioItem>

                        <PortfolioItem 
                            path="/portfolio/technica" 
                            image={TechnicaLogo} 
                            altText="Technica Logo" 
                            custom={{height: '15rem'}}
                            color="green" 
                            name="Technica" >
                        </PortfolioItem>

                        <PortfolioItem 
                            path="/portfolio/videos" 
                            image={VideoGraphic} 
                            altText="Video Graphic" 
                            custom={{width: '18rem'}}
                            color="brown" 
                            name="Videos" >
                        </PortfolioItem>

                        <PortfolioItem 
                            path="/portfolio/polymer-clay" 
                            image={SculpeyLogo} 
                            altText="Sculpey Logo"
                            custom={{width: '80%'}} 
                            color="green" 
                            name="Polymer Clay" >
                        </PortfolioItem> 
                    </div>
                </div>
            </section>
        </div>

    );
};
}

export default Portfolio;