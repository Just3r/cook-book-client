import React, {Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    let containerStyles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      padding: "1em"
    }
    let linksContainer = {
      display: "flex",
      flex: "1",
      width: "100%",
      justifyContent: "space-around"
    }
    let headerStyles= {
      display: "flex",
      flex: "1",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
    let links = {
      textDecoration: "none",
      color: "blue"
    }
    return (
      <div  style={containerStyles}>
        <h1 style={headerStyles}>
          <Link to="/">Homepage CookBook</Link>
        </h1>
        <div style={linksContainer}>
          <Link style={links} to="/dishes">Dishes List</Link>
          <Link style={links} to="/ingridients">Ingridients List</Link>
        </div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
};

export default Main;
