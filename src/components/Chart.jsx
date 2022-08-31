import { Chart as ChartJS, registerables } from 'chart.js';
import React from 'react';
import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);

class SurplusLineChart extends React.Component {
    isChange = false;
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            values: '',
            collections: [],
            data: {
                labels: [],
                datasets: []
            }
        }

        console.log(this.props)
    }

    // componentDidUpdate(prevProps) {
    //     console.log(this.props.collections, prevProps.collections)
    //     if (this.props.collections.length !== prevProps.collections.length) {
    //         console.log('masuk sini apa engga')
    //         this.setState(this.props)
    //     }
    // }

    componentDidMount(prevProps) {
            console.log('masuk sini apa engga')
            this.setState({data: {
                labels: this.props.collections.map(obj => obj.dataSurpluses.map(d => 'GW' + d[this.props.label]))[0],
                datasets: this.props.collections.map(obj => {
                    const data = obj.dataSurpluses.map(d => d[this.props.values]);
                    console.log(data)
                    return {
                        fill: true,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)",
                        data
        
                    }
                })
            }}, () => {
                console.log(this.state.data)
            })
    }

    
    

    render() {
        return (
            <Line
                height={window.height / 3}
                width={window.width / 3}
                options={{ 
                    responsive: true, 
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        // x: {
                        //     display: false
                        // }
                    }
                     }}
                color='red'
                datasetIdKey='id'
                data={this.state.data}
                />
        )
    }
}
export default SurplusLineChart;