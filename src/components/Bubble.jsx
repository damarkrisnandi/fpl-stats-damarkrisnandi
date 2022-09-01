import { Chart as ChartJS, registerables } from 'chart.js';
import React from 'react';
import { Bubble } from "react-chartjs-2";
ChartJS.register(...registerables);

class BubblePointsVsValue extends React.Component {
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

    componentDidUpdate(prevProps) {
        if (prevProps.data.length === this.props.data.length) {
            return;
        }

        const selectCollections = this.props.data.slice(0, this.props.size || 50);
            console.log('masuk sini apa engga')
            console.log(this.props.data);
            const lower = 4; // lowest cost
            const upper = Math.max(...selectCollections.map(data => data.cost));
            const defaultDataset = {
                type: 'line',
                label: 'Lower',
                backgroundColor: `rgba(240,128,128,0.2)`,
                borderColor: `rgba(240,128,128,1)`,
                data: [
                    {x: lower, y: lower},
                    {x: upper, y: upper}
                ]
            }
            this.setState({data: {
                labels: 'Points VS Value',
                datasets: [defaultDataset, ...selectCollections.map(obj => {
                    const data = {x: obj.cost, y: obj.points, r: obj.point_per_value * 5};
                    const r = Math.floor(Math.random() * 255);
                    const g = Math.floor(Math.random() * 255);
                    const b = Math.floor(Math.random() * 255);
                    return {
                        label: obj.name,
                        backgroundColor: `rgba(${r},${g},${b},0.2)`,
                        borderColor: `rgba(${r},${g},${b},1)`,
                        data: [data]
        
                    }
                })]
            }}, () => {
                console.log(this.state.data)
            })
    }

    
    

    render() {
        console.log('height', window.innerHeight)
        return (
            <div >
                <Bubble
                height={window.innerHeight}
                options={{ 
                    responsive: true, 
                    maintainAspectRatio: false,
                    // aspectRatio: 1,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        yAxes: {
                            title: {
                                display: true,
                                text: 'Points',
                                font: {
                                    size: 15
                                }
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        },
                        xAxes: {
                            title: {
                                display: true,
                                text: 'Cost',
                                font: {
                                    size: 15
                                }
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    }
                     }}
                data={this.state.data}
                />
            </div>
            
        )
    }
}
export default BubblePointsVsValue;