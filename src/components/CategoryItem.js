import React from 'react';
//import Modal from './Modal';


class CategoryItem extends React.Component {

  openModal = () => {
    this.props.open();
  }

  render() {

    return (
      <figure className="col-12 col-sm-12 col-md-6 col-lg-4 port-container">
        <img
          src={this.props.image}
          alt={this.props.title}
          onClick={this.openModal.bind(this)}

          style={this.props.custom ? this.props.custom : { height: '100%' }} />
        <figcaption>
          <i>{this.props.title}</i><br />{this.props.caption}
        </figcaption>
      </figure>
    )
  }
}

export default CategoryItem;