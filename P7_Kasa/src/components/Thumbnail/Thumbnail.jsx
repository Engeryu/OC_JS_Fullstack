import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import "./Thumbnail.css"

class Thumbnail extends React.Component {
  render() {
    return (
      <Link
        className="thumbnail-wrapper"
        to={`/location/${this.props.id}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <article className="thumbnail">
          <img
            className="thumbnail__cover"
            src={this.props.cover}
            alt={`Une location située en ${this.props.location}`}
          />

          <div className="thumbnail__filter"></div>

          <h2 className="thumbnail__title">{this.props.title}</h2>
        </article>
      </Link>
    )
  }
}

Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
}

export default Thumbnail
