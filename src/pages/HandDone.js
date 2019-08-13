import React from 'react';
import CategoryItem from '../components/CategoryItem';
import Modal from '../components/Modal';
import Bunny from '../imgs/hand-done/bunny.jpg';
import Drips from '../imgs/hand-done/drips.jpg';
import Line1 from '../imgs/hand-done/line1.jpg';
import Line2 from '../imgs/hand-done/line2.jpg';
import Line3 from '../imgs/hand-done/line3.jpg';
import SelfPortrait from '../imgs/hand-done/self-portrait.jpg'

class HandDone extends React.Component {
    constructor() {
        super();
        this.state = { index: null, open: false };
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    callOpenModal = (index) => {
        this.setState({ index: index });
        this.setState({ open: true });
        this.refs.modalRef.openModal(index);
    }

    render() {
        const imgsUrls = [Line1, Line2, Line3, Drips, Bunny, SelfPortrait];
        return (
            <div>
                <Modal ref="modalRef" imgsUrls={imgsUrls} modalIndex={this.state.index} isOpen={this.state.open} />

                <section>
                    <h2 className="title">Hand Done</h2>
                </section>
                <section className="padded">
                    <div className="container">
                        <div className="row wrap">

                            <CategoryItem
                                image={Line1}
                                title="Line Art Studies 1"
                                caption="Black Paper"
                                open={this.callOpenModal.bind(this, 0)}
                            />

                            <CategoryItem
                                image={Line2}
                                title="Line Art Studies 2"
                                caption="Graphite Pencils"
                                open={this.callOpenModal.bind(this, 1)}
                            />

                            <CategoryItem
                                image={Line3}
                                title="Line Art Studies 3"
                                caption="Black Ink"
                                open={this.callOpenModal.bind(this, 2)}
                            />

                            <CategoryItem
                                image={Drips}
                                title="Drips"
                                caption="Acrylic Paint"
                                open={this.callOpenModal.bind(this, 3)}
                            />

                            <CategoryItem
                                image={Bunny}
                                custom={{ height: '90%' }}
                                title="Bunny"
                                caption="Multimedia"
                                open={this.callOpenModal.bind(this, 4)}
                            />

                            <CategoryItem
                                image={SelfPortrait}
                                title="Self Portrait"
                                caption="Oil Pastels, Charcoal, Acrylic Paint, & Black Ink"
                                open={this.callOpenModal.bind(this, 5)}
                            />

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HandDone;