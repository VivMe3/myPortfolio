import React from 'react';
import CategoryItem from '../components/CategoryItem';
import DesignFlyer from '../imgs/graphic-design/graphic-design-poster.png';
import McfEvents from '../imgs/graphic-design/mcf-events.png';
import FamilyLeavePoster from '../imgs/graphic-design/family-leave.png';
import DeadlinePoster from '../imgs/graphic-design/deadline.png';
import ProgramGuide from '../imgs/graphic-design/mathematics-program-guide.jpg';
import Modal from '../components/Modal';

class GraphicDesign extends React.Component {
    constructor() {
        super();

        this.state = { index: null, open: false };

    }


    openModal3 = (index) => {
        this.setState({ index: index });

        this.setState({ open: true });
        this.refs.modalRef.openModal(index);

    }

    render() {

        const imgsUrls = [DesignFlyer, McfEvents, FamilyLeavePoster];
        return (
            <div>
                <Modal ref="modalRef" imgsUrls={imgsUrls} modalIndex={this.state.index} isOpen={this.state.open} />

                <section>
                    <h2 className="title">Graphic Design {this.state.index}</h2>
                </section>
                <section className="padded">
                    <div className="container">
                        <div className="row wrap">

                            <CategoryItem
                                image={DesignFlyer}
                                title="Graphic Design Seminar Flyer"
                                caption="Illustrator"
                                open={this.openModal3.bind(this, 0)}


                            />

                            <CategoryItem
                                image={McfEvents}
                                title="MCF Events Flyer"
                                caption="Illustrator"
                                open={this.openModal3.bind(this, 1)}
                            />

                            <CategoryItem
                                image={FamilyLeavePoster}
                                title="Paid Family Leave Poster"
                                caption="Illustrator"
                                open={this.openModal3.bind(this, 2)}
                            />

                            <CategoryItem
                                image={DeadlinePoster}
                                custom={{ height: '90%' }}
                                title="Course Deadline Poster"
                                caption="Illustrator"
                            />

                            <CategoryItem
                                image={ProgramGuide}
                                custom={{ height: '90%' }}
                                title="Mathematics Program Guide"
                                caption="InDesign"
                            />

                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default GraphicDesign;