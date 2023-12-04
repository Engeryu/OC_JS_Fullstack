import React from "react";
import PropTypes from "prop-types";

import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import { PropertyAdvertisement } from "../../data/propertyAdvertisement";

class Home extends React.Component {
  render() {
    return (
      <main className="Home">
        <Banner
          imgSource="../assets/coast-landscape.jpeg"
          altText="Un paysage sauvage de bord de mer"
          title="Chez vous, partout et ailleurs"
        />

        <Gallery advertisements={this.props.advertisements} />
      </main>
    );
  }
}

Home.propTypes = {
  advertisements: PropTypes.arrayOf(PropTypes.instanceOf(PropertyAdvertisement))
    .isRequired,
};

export default Home;
