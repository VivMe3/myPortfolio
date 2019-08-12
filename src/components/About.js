import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <section className="about padded" id="About">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4">
                                <h2>Hi there,<br /> I'm Vivian</h2>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8">
                                <p className="subheading">
                                    I like art. I like coding. I love when I can combine the two. <br></br>&nbsp; 
                                </p>
                                <p>
                                    My ambition is to become a better front end developer and to dabble more in UI/UX design.
                                    In my free time, I like sculpting polymer clay, reading, and looking at random websites to find good designs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;