import React from "react"
import PropTypes from "prop-types"

import "./Collapse.css"

class Collapse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
    this.updateIsOpen = this.updateIsOpen.bind(this)
  }

  updateIsOpen() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const collapseIcon = `fas fa-chevron-${this.state.isOpen ? "up" : "down"}`

    return (
      <section
        className={`collapse${this.state.isOpen ? " is-open" : " is-close"}`}
      >
        <h2 className="collapse__title" onClick={this.updateIsOpen}>
          <span>{this.props.title}</span>
          <span className={collapseIcon}></span>
        </h2>

          {this.props.textArray.map((item, index) => (
            <section className={`collapse__text ${
              this.state.isOpen ? "is-open" : "is-close"
            }`} key={`item-${index}`}>{item}</section>
          ))}
      </section>
    )
  }
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Collapse
