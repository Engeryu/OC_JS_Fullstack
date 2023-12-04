import React from "react"
import PropTypes from "prop-types"

import "./Carousel.css"

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPictureIndex: 0,
    }
    this.updateCurrentPicture = this.updateCurrentPicture.bind(this)
  }

  updateCurrentPicture(newIndex) {
    this.setState({
      currentPictureIndex: newIndex,
    })
  }

  /**
   * @param {boolean} nextClicked
   */
  updatePicture(nextClicked = true) {
    const current = this.state.currentPictureIndex
    const quantity = this.props.pictures.length
    const pictureToDisplayIndex = nextClicked
      ? (current + 1) % quantity
      : (current + quantity - 1) % quantity
    this.updateCurrentPicture(pictureToDisplayIndex)
  }

  render() {
    const pictures = this.props.pictures

    return (
      <section className="carousel">
        <div className="carousel__pictures-box">
          {pictures.length > 0 ? (
            <img
              className="carousel__picture"
              src={pictures[this.state.currentPictureIndex]}
              alt=""
            />
          ) : (
            <p className="carousel__no-pic-message">Aucune image disponible</p>
          )}
        </div>

        {pictures.length > 1 ? (
          <nav className="carousel__nav">
            <i
              className="fas fa-chevron-left"
              onClick={() => this.updatePicture(false)}
            ></i>
            <i
              className="fas fa-chevron-right"
              onClick={() => this.updatePicture(true)}
            ></i>
          </nav>
        ) : (
          ""
        )}

        {pictures.length > 0 ? (
          <div className="carousel__counter">
            {this.state.currentPictureIndex + 1}/{pictures.length}
          </div>
        ) : (
          ""
        )}
      </section>
    )
  }
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
}

export default Carousel
