import React from 'react';
import profile from '../imgs/do_vivian.jpeg';

class Home extends React.Component {

  render() {
    return (
      <div>

        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 d-md-none shrink">
              <img src={profile} alt="Vivian Do" height="300rem"/>
              </div>
              <div className="col-12 col-sm-12 col-md-8 shrink">
                <h1>VIVIAN DO</h1>
                <h3> FRONT END DEVELOPER/<br></br>GRAPHIC DESIGNER </h3>
                <a className="button" href="#About">Meet Me <i className="fa fa-chevron-down"></i></a>
              </div>
              <div className="col-12 col-sm-12 col-md-4 d-none d-md-block shrink">
                <img src={profile} alt="Vivian Do" height="300rem" />
              </div>
            </div>
          </div>

        </section>
      </div>
    )
  }
}

export default Home;