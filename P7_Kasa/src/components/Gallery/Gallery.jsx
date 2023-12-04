import React from "react"
import PropTypes from "prop-types"

import Thumbnail from "../Thumbnail/Thumbnail"
import "./Gallery.css"
import { PropertyAdvertisement } from "../../data/propertyAdvertisement"

class Gallery extends React.Component {
  render() {
    return (
      <article className="gallery">
        <section>
          {this.props.advertisements.map(({ id, cover, title, location }) => (
            <Thumbnail
              key={`thumbnail-${id}`}
              id={id}
              cover={cover}
              title={title}
              location={location}
            />
          ))}
        </section>
      </article>
    )
  }
}

Gallery.propTypes = {
  advertisements: PropTypes.arrayOf(PropTypes.instanceOf(PropertyAdvertisement))
    .isRequired,
}

export default Gallery
