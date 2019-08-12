import React from 'react';
import Pigeon from '../media/pigeon-adaptation.mp4';

class GraphicDesign extends React.Component {
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
        return (
            <div>
                <section>
                    <h2 className="title">Videos</h2>
                </section>
                <section className="padded">
                    <div className="container">


                        <video className="center" width="70%" controls>
                            <source src={Pigeon} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>

                        <p style={{ textAlign: 'center' }}>
                            <br /><i>Pigeon Series Adaptation</i><br />
                            Premiere Pro & Audition
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default GraphicDesign;