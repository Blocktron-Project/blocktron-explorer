/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import './style.css';

class DonutChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chartData: '',
            labels: ''
        };
    }

    componentDidMount() {
        let chart = document.querySelector('#chart');
        console.log(this.state);
        this.setState({
            chartData: this.props.chartData,
            labels: this.props.labels
        });
        let chartData = {
            datasets: [{
                data: [this.state.chartData[0], this.state.chartData[1]],
                backgroundColor: ['#dce775', '#e6ee9c'],
                hoverBackgroundColor: ['#afb42b', '#cddc39']
            }],
            labels: [this.state.labels[0], this.state.labels[1]]
        };
        let heapTotalChart = new Chart(chart, {
            type: 'doughnut',
            data: chartData
        });
    }

    render() {
        return (
            <div className="col s12 m6">
                <canvas id="chart" width="300" height="300"></canvas>
            </div>
        );
    }
}
export default DonutChart;
