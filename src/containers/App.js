import React from "react";
import {connect} from 'react-redux'
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import axios from "axios";
import ErrorBoundary from "../components/ErrorBoundary"
import {setSearchField} from '../actions'

const mapStateToProps = state => {
  return {
    searchField : state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange : (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.data;
      })
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return !robots.length ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
