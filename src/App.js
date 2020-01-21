import React from "react";
import "./App.css";
import Header from "./components/header/header";
import SearchBar from "./components/search-bar/search-bar";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      searchTerm: null,
      displayWeather: false
    };
  }

  componentDidMount(){
    
  }

  clickHandler = e => {
    console.log("clicked!", e);
    const displayWeather = !this.state.displayWeather
    this.setState({displayWeather});
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    axios.get(`${baseURL}?q=${this.state.searchTerm}&appid=164b4792bbb9d92dde20e42d2a6cebac&units=metric
    `).then(res => this.weather = res)
  };

  inputHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };


  render() {

    let hello;
    
    if(this.state.displayWeather){
      hello = <h1>{this.state.searchTerm}</h1>
    } else {
      hello = null;
    }
    return (
      <div className="App">
        <header className="App-header">
          {/* header component */}
          <Header />
          {/* search bar */}
          <SearchBar clicked={this.clickHandler} changed={this.inputHandler} />
          {/* display weather component */}
          {hello}
        </header>
      </div>
    );
  }
}

export default App;
