import React , { Component } from 'react';
import './City.css';

import axios from '../../axios';

class City extends Component {

    state = {
        Temperature: null,
        Humidity: null, 
        Wind: null,
        City: null,
        Startcity: "Copenhagen",
        SearchCity: "",
        callFailed: false
    }

    setUrl(city) {
        this.props.history.push({
            pathname: 'container',
            search: '?city='+city
        });
    }

    componentDidMount() {
        
        if(this.props.history.location.pathname === "/") {
            
            this.setUrl(this.state.Startcity);
            this.getWeaherInformation("copenhagen");

        } else if(this.props.history.location.search.includes(this.state.Startcity) || this.props.history.location.search === '?city=') {
            
            this.setUrl(this.state.Startcity);
            this.getWeaherInformation("copenhagen");

        } else {
          
            this.setUrl(this.props.location.search.substring(6));

            this.getWeaherInformation(decodeURIComponent(this.props.location.search.substring(6)));
        }
        
    }

    inputChanged = (event) => { 
        event.preventDefault();

        this.setState({
            SearchCity: event.target.value,
        })
    }

    buttonClicked = (event) => {
        event.preventDefault();
        this.getWeaherInformation(this.state.SearchCity);
    }

    getWeaherInformation = (city) => {

        axios.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=166d00e26d3ff2c6149e89feccc5c59a"    )
        .then(res => {

            this.setState({
                Temperature: res.data.main.temp,
                Humidity: res.data.main.humidity,
                Wind: res.data.wind.speed,
                City: city,
                SearchCity: city,
                callFailed: false
            })

            this.setUrl(city);

        })
        .catch(err => {

            this.setState({
                Temperature: "",
                Humidity: "",
                Wind: "",
                City: "",
                callFailed: true
            })

            this.setUrl(city);
            
            console .log(err);
        })
    }

    render() {
        let errorMessage = null;

        if(this.state.callFailed) {
            errorMessage = <p>City could not be found</p>;
        } else {
            errorMessage = "";
        }

        return (
            <div className="citycontainer">
                <div className="widget" style={{margin: "10px", width: "300px"}}>
                    <li className="list-group-item bg-info">Weather in <b>{this.state.City}</b></li>
                    <li className="list-group-item">Temperature: <b>{this.state.Temperature}°C</b></li>
                    <li className="list-group-item">Humidity: <b>{this.state.Humidity}</b></li>
                    <li className="list-group-item">Wind: <b>{this.state.Wind} m/s Øst</b></li>
                    <li className="list-group-item">
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control" id="city" placeholder="City" onChange={(event) => this.inputChanged(event)}/>
                                <button type="submit" className="btn btn-info" onClick={this.buttonClicked}>Search</button>
                            </div>
                        </form>
                    </li>
                </div>
                {errorMessage}
            </div>
        )
    }
}

export default City;