import React from 'react';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentImageIndex: null }
    }

    updateIndex = (index) => {
        this.setState({ currentImageIndex: index })
    }

    previousSlide = () => {
        const currIdx = this.state.currentImageIndex;
        const lastIndex = this.props.imgsUrls.length - 1;
        const shouldResetIndex = currIdx === 0;
        const index = shouldResetIndex ? lastIndex : currIdx - 1;
        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide = () => {
        const currIdx = this.state.currentImageIndex;
        const lastIndex = this.props.imgsUrls.length - 1;
        const shouldResetIndex = currIdx === lastIndex;
        const index = shouldResetIndex ? 0 : currIdx + 1;
        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        if (typeof this.props.imgsUrls[this.state.currentImageIndex] === 'object') {
            return (
                <div className="modalSlides">
                    <div className="prev" direction="left" onClick={this.previousSlide} >&#10094;</div>
                    <img src={this.props.imgsUrls[this.state.currentImageIndex][1]} alt="" />
                    <img src={this.props.imgsUrls[this.state.currentImageIndex][2]} alt="" />
                    <div className="next" direction="right" onClick={this.nextSlide} >&#10095;</div>
                </div>
            );
        } else {
            return (
                <div className="modalSlides">
                    <div className="prev" direction="left" onClick={this.previousSlide} >&#10094;</div>
                    <img src={this.props.imgsUrls[this.state.currentImageIndex]} alt="" />
                    <div className="next" direction="right" onClick={this.nextSlide} >&#10095;</div>
                </div>
            );
        }
        


        // return(
        //     <div className="modalSlides">
        //         <div className="prev" direction="left" onClick={this.previousSlide} >&#10094;</div> 
        //         <img src={this.props.imgsUrls[this.props.carouselIndex]} alt=""/>
        //         <div className="next" direction="right" onClick={this.nextSlide} >&#10095;</div>
        //     </div>
        // );
    }
}

export default Carousel;