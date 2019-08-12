import React from 'react';
import CategoryItem from '../components/CategoryItem';
import Eeyore from '../imgs/polymer-clay/eeyore.jpg';
import Yoshi from '../imgs/polymer-clay/yoshi.jpg';
import PeachMario from '../imgs/polymer-clay/peach-mario.jpg';
import Chrysanthemum from '../imgs/polymer-clay/chrysanthemum.JPG';
import Testudo from '../imgs/polymer-clay/testudo.JPG';
import WeddingTopper from '../imgs/polymer-clay/wedding-topper.JPG';
import Modal from '../components/Modal';

class PolymerClay extends React.Component {
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
        const imgsUrls = [Eeyore, Yoshi, PeachMario, Chrysanthemum, Testudo, WeddingTopper];
        return (
            <div>
                <Modal ref="modalRef" imgsUrls={imgsUrls} modalIndex={this.state.index} isOpen={this.state.open} />

                <section>
                    <h2 className="title">Polymer Clay</h2>
                </section>
                <section className="padded">
                    <div className="container">
                        <div className="row wrap">

                            <CategoryItem
                                image={Eeyore}
                                title="Eeyore"
                                caption="Polymer Clay"
                                open={this.callOpenModal.bind(this, 0)}
                            />

                            <CategoryItem
                                image={Yoshi}
                                title="Yoshi"
                                caption="Polymer Clay"
                                open={this.callOpenModal.bind(this, 1)}
                            />

                            <CategoryItem
                                image={PeachMario}
                                title="Peach & Mario"
                                caption="Polymer Clay"
                                open={this.callOpenModal.bind(this, 2)}
                            />

                            <CategoryItem
                                image={Chrysanthemum}
                                title="Chrysanthemum"
                                caption="Polymer Clay"
                                open={this.callOpenModal.bind(this, 3)}
                            />

                            <CategoryItem
                                image={Testudo}
                                title="Testudo"
                                caption="Polymer Clay"
                                open={this.callOpenModal.bind(this, 4)}
                            />

                            <CategoryItem
                                image={WeddingTopper}
                                title="Wedding Topper"
                                caption="Polymer Clay"
                                open={this.callOpenModal.bind(this, 5)}
                            />

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PolymerClay;