import React from "react"
import PropTypes from "prop-types"

import "./Banner.css"

class Banner extends React.Component {
  render() {
    return (
      <article className="hero-banner">
        <img src={this.props.imgSource} alt={this.props.altText} />

        <h1>{this.props.title}</h1>
      </article>
    )
  }
}

Banner.propTypes = {
  imgSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Banner
