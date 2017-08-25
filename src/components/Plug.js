import React, { Component } from 'react';

class Plug extends Component {
  render() {
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        width: "100%"
    }
    return (
     <h2 style={styles}> Please, select a tab </h2>
    )
  }
};

export default Plug;
