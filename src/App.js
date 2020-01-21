import React from "react";
import "./App.css";
import Header from "./components/header/header";
import SearchBar from "./components/search-bar/search-bar";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherLocation: null,
      weatherType: null,
      searchTerm: null,
      displayWeather: false
    };
  }

  componentDidMount(){
    
  }

  clickHandler = e => {
    console.log("clicked!", e);
    // const displayWeather = !this.state.displayWeather
    // this.setState({displayWeather});
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    axios.get(`${baseURL}?q=${this.state.searchTerm}&appid=164b4792bbb9d92dde20e42d2a6cebac&units=metric
    `).then(res => {
      const weatherType = res.data.weather[0].main;
      console.log(res.data.weather[0].main)
      this.setState({weatherType, weatherLocation: res.data.name})
    })
  };

  inputHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };


  render() {

    let weatherType;
    
    if(this.state.weatherType){
      weatherType = <h1>{this.state.weatherType}</h1>
    } else {
      weatherType = null;
    }
    return (
      <div className="App">
        <header className="App-header">
          {/* header component */}
          <Header />
          {/* search bar */}
          <SearchBar clicked={this.clickHandler} changed={this.inputHandler} />
          {/* display weather component */}
          {this.state.weatherLocation}
          {weatherType}
          
        </header>
      </div>
    );
  }
}

export default App;
