var React = require('react');

var WeatherForecastDay = React.createClass({
	render: function () {
		var date = this.props.date_text;
		var temp = this.props.main.temp;
		var weather = this.props.weather[0];
		var tempType = this.props.tempType;
		//need to add support for 'tomorrow'

		if (tempType === 'C') {
      temp = ((temp - 32) * (5/9)).toFixed(2);
    }
    return (versionnode)
    }
}
)