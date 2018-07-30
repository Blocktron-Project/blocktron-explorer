/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class DonutChart extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let el = ReactDOM.findDOMNode(this.refs.chart);
        let chart = el.getContext('2d');
        let chartData = {
            datasets: [{
                data: [parseInt(this.props.chartData[0]), parseInt(this.props.chartData[1])],
                backgroundColor: ['#dce775', '#e6ee9c'],
                hoverBackgroundColor: ['#afb42b', '#cddc39']
            }],
            labels: [this.props.labels[0], this.props.labels[1]]
        };
        let drawChart = new Chart(chart, {
            type: 'doughnut',
            data: chartData
        });
    }
    render() {
        return (
            <div className="col s12 m6">
                <canvas ref="chart" width="300" height="300"></canvas>
            </div>
        );
    }
}
export default DonutChart;
