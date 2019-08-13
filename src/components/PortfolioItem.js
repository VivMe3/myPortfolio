import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 port-container">
          <a href={props.path}>
            <img src={props.image} alt={props.altText} style={props.custom} />
            <div className={`overlay ${props.color}`}>
              <p className="text">
                {props.name}
              </p>
            </div>
          </a>
        </div>
    )
}

export default PortfolioItem;