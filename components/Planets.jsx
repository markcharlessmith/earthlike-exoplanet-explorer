import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
// import DetailsModal from './DetailsModal';

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPlanets: false,
      planets: [],
      modalState: {
        open: false,
        type: null,
        position: { top: 0, left: 0 },
        id: null
      }
    };

    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    fetch('/api/')
      .then(res => res.json())
      .then((planets) => {
        if (!Array.isArray(planets)) planets = [];
        return this.setState({
          planets,
          fetchedPlanets: true
        });
      })
      .catch(err => console.log('Planets.componentDidMount: get characters: ERROR: ', err));
  }

//   openModal(type, position, id) {
//     this.setState({
//       modalState: {
//         ...this.state.modalState,
//         open: true,
//         type,
//         position,
//         id
//       }
//     });
//   }

//   closeModal() {
//     this.setState({
//       modalState: {
//         ...this.state.modalState,
//         open: false
//       }
//     });
//   }

  render() {
    if (!this.state.fetchedPlanets) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );

    const { planets } = this.state;

    if (!planets) return null;

    if (!planets.length) return (
      <div>Sorry, no planets found</div>
    );

    const planetElems = planets.map((planet, i) => {
      return (
        <Card
          key={i}
          info={planet}
          openModal={this.openModal}
        />
      );
    });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <h2>Planets</h2>
          <Link to={'/create'}>
            <button
              type="button"
              className="btnSecondary"
            >
              Create Planet
            </button>
          </Link>
        </header>
        <div className="planetContainer">
          {planetElems}
        </div>
        {/* {this.state.modalState.open &&
          <DetailsModal
            type={this.state.modalState.type}
            position={this.state.modalState.position}
            id={this.state.modalState.id}
            closeModal={this.closeModal}
          />
        } */}
      </section>
    );
  }
}

export default Planets;
