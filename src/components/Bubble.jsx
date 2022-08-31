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
            console.log('masuk sini apa engga')
            console.log(this.props.data);
            this.setState({data: {
                labels: 'Points VS Value',
                datasets: this.props.data.slice(0, this.props.size || 50).map(obj => {
                    const data = {x: obj.cost, y: obj.points, r: obj.point_per_value * 5};
                    const r = Math.floor(Math.random() * 255);
                    const g = Math.floor(Math.random() * 255);
                    const b = Math.floor(Math.random() * 255);
                    return {
                        label: obj.name + [0, 25, 50, 75].includes(obj.chance_of_playing_next_round) && `(${obj.chance_of_playing_next_round}% of playing next round)`,
                        backgroundColor: `rgba(${r},${g},${b},0.2)`,
                        borderColor: `rgba(${r},${g},${b},1)`,
                        data: [data]
        
                    }
                })
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
                                precision: 0
                            }
                        },
                        xAxes: {
                            title: {
                                display: true,
                                text: 'Cost',
                                font: {
                                    size: 15
                                }
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