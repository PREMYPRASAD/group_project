import React, { Component } from 'react';
import './Home.css'


export default class Home extends Component {
  state = {
    showMore: false
  };

  handleShowMore = () => {
    this.setState({
      showMore: true
    });
  };

  render() {
    const { showMore } = this.state;
    return (

      <div className="mid-section">
        {!showMore && (
          <div className="heading">
            <h1>WELCOME TO PIZZA HUT</h1>
            <button onClick={this.handleShowMore} className="show-more-button">
              Show more
            </button>
          </div>
        )}
        {showMore && (
          <div className="more-info">
            <p>Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. The chain, headquartered in Plano, Texas, operates 17,639 restaurants worldwide as of 2020. It is owned by Yum! Brands, Inc</p>
          </div>
        )}
      </div>
    );
  }
}
