import React from 'react';


class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0

        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = this.props.imgsUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = this.props.imgsUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return (
            <div className="modalSlides">
                <div className="prev" direction="left" onClick={this.previousSlide} >&#10094;</div> 
                <img src={this.props.imgsUrls[this.state.currentImageIndex]} alt=""/>
                <div className="next" direction="right" onClick={this.nextSlide} >&#10095;</div>
            </div>
        );
    }
}

export default Carousel;