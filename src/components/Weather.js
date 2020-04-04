import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.results)
        return (
            <div>
                <h2>{this.props.results.name} {this.props.results.sys.country}</h2>
                <h2>Current temperature is {this.props.results.main.temp} F</h2>
                <h2>Weather condition is {this.props.results.weather[0].description}</h2>
            </div>
        );
        else
        return null;
    }
}

export default Weather;