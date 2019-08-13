import React from 'react';
import Carousel from './Carousel';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: this.props.isOpen, index: null };
    }

    openModal = (index) => {
        document.getElementById('myModal').style.display = "block";
        this.setState({ open: true, index: index });
        this.refs.carouselRef.updateIndex(index);
    }

    closeModal = () => {
        document.getElementById('myModal').style.display = "none";
        this.setState({ open: false });
    }

    makeDots = () => {
        let i = 0;
        return this.props.imgsUrls.map((img) => {
            return (
                <span className="dot" key={img} onClick={this.openModal.bind(this, i++)}></span>
            )
        })
    }

    render() {
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

                    <Carousel ref="carouselRef" imgsUrls={this.props.imgsUrls} />
                </div>

                <div style={{ textAlign: 'center' }}>
                    {this.makeDots()}
                </div>
            </div>
        )
    }
}

export default Modal;