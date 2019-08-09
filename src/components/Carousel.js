import React from 'react';


class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentImageIndex: null, open: this.props.opened }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    updateIndex = (index) => {
        console.log("index received from modal")
        this.setState({ currentImageIndex: index })
    }

    previousSlide() {
        let currIdx = null;
        if (this.state.currentImageIndex == null) {
            currIdx = this.props.carouselIndex;
        } else {
            currIdx = this.state.currentImageIndex;
        }
        const lastIndex = this.props.imgsUrls.length - 1;
        // const { currentImageIndex } = this.state;
        const shouldResetIndex = currIdx === 0;
        const index = shouldResetIndex ? lastIndex : currIdx - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        let currIdx = null;
        if (this.state.currentImageIndex == null) {
            currIdx = this.props.carouselIndex;
        } else {
            currIdx = this.state.currentImageIndex;
        }
        const lastIndex = this.props.imgsUrls.length - 1;
        // const { currentImageIndex } = this.state;
        const shouldResetIndex = currIdx === lastIndex;
        const index = shouldResetIndex ? 0 : currIdx + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        console.log("carousel rendered");
        console.log("carousel received from modal: " + this.props.carouselIndex);
        console.log("carousel - is modal open? " + this.props.opened);

        return (
            <div className="modalSlides">
                <div className="prev" direction="left" onClick={this.previousSlide} >&#10094;</div>
                <img src={this.props.imgsUrls[this.state.currentImageIndex]} alt="" />
                <div className="next" direction="right" onClick={this.nextSlide} >&#10095;</div>
            </div>
        );


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