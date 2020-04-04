import React from 'react';
import './Review.css';
import axios from 'axios';
import Weather from './Weather';

class Review extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(), color: 'Success', results: undefined, zip: ''};
        this.queryWeather = this.queryWeather.bind(this);
        this.changeZip = this.changeZip.bind(this);
    }

    queryWeather(event) {
        event.preventDefault();
        this.setState({date: new Date(), results: undefined});
        this.getWeather();
    }

    changeZip(e) {
        this.setState({zip: e.target.value});
    }

    getWeather() {
        const url = 'http://api.openweathermap.org/data/2.5/weather?zip=' 
        + this.state.zip 
        + ',us&APPID=' + process.env.REACT_APP_openweathermap_APP_ID
        + '&units=imperial';
        axios.get(url)
        .then(response => {
            console.log(response);
            this.setState({results: response.data, color: 'Success'});
        }).catch(error => {
            this.setState({color: 'Failure'});
            console.log('error when querying');
        });
    }
     
    render() {
        return (
            <div>
                <h1 className={this.state.color}>Query failed!</h1>
                <form onSubmit={this.queryWeather}>
                <label>
                    Zip Code:
                    <input type="text" value={this.state.zip} onChange={this.changeZip}/>
                </label>
                <input type="submit" value="Check Weather"/>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <Weather results={this.state.results}/>
                </form>
            </div>
        );
    }
}

export default Review;