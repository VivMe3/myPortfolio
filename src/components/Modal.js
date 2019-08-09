import React from 'react';
import Carousel from './Carousel';

class Modal extends React.Component {
    constructor(props) {
        super(props);
  //      this.openModal2 = this.openModal2.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {open: this.props.isOpen};
        // this.state = {index : this.props.modalIndex};
    }

    // openModal2 = (index) => {
    //     console.log("modal2");
    //     this.setState({index: index});
    //     document.getElementById('myModal').style.display = "block";
    // }

    // openModal2 = (index) => {
    //     document.getElementById('myModal').style.display = "block";
    //     this.setState({open: true});
    //     console.log("openModal - graphic design")
    // }

    openModal = (index) => {
        document.getElementById('myModal').style.display = "block";
        this.setState({open: true});
        console.log("Modal opened");
        console.log("passing index to carousel fct")
        this.refs.carouselRef.updateIndex(index);
    }

    closeModal = () => {
        document.getElementById('myModal').style.display = "none";
        this.setState({open: false});
        console.log("Modal closed");
    }

    render() {
        console.log("Modal rendered");
         console.log("Modal sending index to carousel: " + this.props.modalIndex);
       
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

                    <Carousel ref="carouselRef" imgsUrls={this.props.imgsUrls} carouselIndex={this.props.modalIndex} opened = {this.state.open}/>
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