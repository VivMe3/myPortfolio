import React from 'react';
import Carousel from './Carousel';
import DesignFlyer from '../imgs/graphic-design/graphic-design-poster.png';
import McfEvents from '../imgs/graphic-design/mcf-events.png';

class Modal extends React.Component {


    closeModal() {
        document.getElementById('myModal').style.display = "none";
    }

    render() {
        console.log(this.props.imgsUrls);
        return (
            <div id="myModal" className="modal">


                <div className="modal-content">
                    <div className="close cursor" onClick={this.closeModal}>&times;</div>



                    {/*
                    <a className="prev" >&#10094;</a>
                    <a className="next">&#10095;</a>
        
                    <div className="caption-container">
                        <p id="caption"></p>
                    </div>
 */}

                    <Carousel imgsUrls={this.props.imgsUrls} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <span className="dot" ></span>
                    <span className="dot" ></span>
                    <span className="dot" ></span>
                    <span className="dot" ></span>
                    <span className="dot" ></span>
                </div>
            </div>
        )
    }
}

export default Modal;