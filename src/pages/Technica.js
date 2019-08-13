import React from 'react';
import CategoryItem from '../components/CategoryItem';
import Modal from '../components/Modal';
import IntroSched from '../imgs/technica/intro-wksp-sched.png';
import TechX from '../imgs/technica/tech+X-sched.png';
import Donuts from '../imgs/technica/3days-donuts.png';
import MothersDay from '../imgs/technica/mothers-day.png';

class Technica extends React.Component {
    constructor() {
        super();
        this.state = { index: null, open: false };
    }

    callOpenModal = (index) => {
        this.setState({ index: index });
        this.setState({ open: true });
        this.refs.modalRef.openModal(index);
    }

    render() {
        const imgsUrls = [IntroSched, TechX, Donuts, MothersDay];
        return (
            <div>
                <Modal ref="modalRef" imgsUrls={imgsUrls} modalIndex={this.state.index} isOpen={this.state.open} />

                <section>
                    <h2 className="title">Technica</h2>
                </section>
                <section className="padded">
                    <div className="container">
                        <div className="row wrap">

                            <CategoryItem
                                image={IntroSched}
                                title="Intro Workshops Schedule"
                                caption="Illustrator"
                                open={this.callOpenModal.bind(this, 0)}
                            />

                            <CategoryItem
                                image={TechX}
                                title="Tech+X Schedule"
                                caption="Illustrator"
                                open={this.callOpenModal.bind(this, 1)}
                            />

                            <CategoryItem
                                image={Donuts}
                                title="Technica Countsown Graphic"
                                caption="Illustrator"
                                open={this.callOpenModal.bind(this, 2)}
                            />

                            <CategoryItem
                                image={MothersDay}
                                title="Mother's Day Graphic"
                                caption="Illustrator"
                                open={this.callOpenModal.bind(this, 3)}
                            />

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Technica;