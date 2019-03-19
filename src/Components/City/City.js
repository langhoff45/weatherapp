import React , { Component } from 'react';
import './City.css';

import axios from '../../axios';

class City extends Component {

    state = {
        Temperature: null,
        Humidity: null, 
        Wind: null,
        Startcity: "Copenhagen",
        SearchCity: "Copenhagen"
    }

    

    componentDidMount() {

        this.getCityWeatherInfoInitial();

    }

    inputChanged = (event) => { 
        event.preventDefault();

        this.setState({
            SearchCity: event.target.value
        })
    }

    buttonClicked = (event) => {
        event.preventDefault();
        
        axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.state.SearchCity+"&appid=166d00e26d3ff2c6149e89feccc5c59a"    )
        .then(res => {

                this.setState({
                    Temperature: res.data.main.temp,
                    Humidity: res.data.main.humidity,
                    Wind: res.data.wind.speed
                })
                
            console.log(res)

            console.log(this.state)
        })
        .catch(err => {

            this.setState({
                Temperature: "",
                Humidity: "",
                Wind: "",
                SearchCity: "By kunne ikke findes"
            })
        })
    }



    getCityWeatherInfoInitial() {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=166d00e26d3ff2c6149e89feccc5c59a"    )
        .then(res => {

                this.setState({
                    Temperature: res.data.main.temp,
                    Humidity: res.data.main.humidity,
                    Wind: res.data.wind.speed
                })
                
            console.log(res)

            console.log(this.state)
        })
        .catch(err => {
        })
    }

    render() {
        return (
            <div className="citycontainer">
                <div className="widget" style={{margin: "10px", width: "300px"}}>
                    <li className="list-group-item">Weather in <b>{this.state.SearchCity}°C</b></li>
                    <li className="list-group-item">Temperature: <b>{this.state.Temperature}°C</b></li>
                    <li className="list-group-item">Humidity: <b>{this.state.Humidity}</b></li>
                    <li className="list-group-item">Wind: <b>{this.state.Wind} m/s Øst</b></li>
                    <li className="list-group-item">
                    <form className="form-inline">
                        <div className="form-group">
                        <input type="text" className="form-control" id="city" placeholder="City" onChange={(event) => this.inputChanged(event)}/>
                        </div>
                        <button type="submit" className="btn btn-default" onClick={this.buttonClicked}>Search</button>
                    </form>
                </li>
                </div>
            </div>

        )
    }
}

export default City;