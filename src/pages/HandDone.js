import React from 'react';
import FamilyLeavePoster from '../imgs/graphic-design/family-leave.png';
import DeadlinePoster from '../imgs/graphic-design/deadline.png';
import Modal from '../components/Modal';

class HandDone extends React.Component {

    

    render() {
        const imgsUrls = [FamilyLeavePoster, DeadlinePoster];
        return (
            <div>
            <Modal imgsUrls={imgsUrls}/>
                {/*
                <section>
                    <h2 className="title">Graphic Design</h2>
                </section>
                <section className="padded">
                    <div className="container">
                        <div className="row wrap">

                            <CategoryItem
                                image={DesignFlyer}
                                title="Graphic Design Seminar Flyer"
                                caption="Illustrator"
                            />

                            <CategoryItem
                                image={McfEvents}
                                title="MCF Events Flyer"
                                caption="Illustrator"
                            />

                            <CategoryItem
                                image={FamilyLeavePoster}
                                title="Paid Family Leave Poster"
                                caption="Illustrator"
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
        */}
            </div>
        )
    }
}

export default HandDone;