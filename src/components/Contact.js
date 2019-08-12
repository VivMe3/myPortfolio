import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <section className="footer padded brown" id="Contact">
                    <div className="container">
                        <div className="row">
                            <div className="column">
                                <h2 className="header">Contact Me</h2>
                                <p>
                                    <a href="mailto:vivme3@gmail.com">  <i className="fa fa-envelope-o"></i> &nbsp; VivMe3@gmail.com</a><br />
                                    <i className="fa fa-phone"></i> &nbsp; (908)670-8624 <br />
                                    <a href="https://www.linkedin.com/in/vivian-thanh-do/"><i className="fa fa-linkedin-square"></i></a>
                                    <a href="https://github.com/VivMe3"><i className="fa fa-github-square"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;