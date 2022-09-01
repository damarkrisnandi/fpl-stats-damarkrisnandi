import { Component, Fragment } from "react";
import BubblePointsVsValue from "../components/Bubble";
import { getPlayerSurpluses, getRecomendation } from "../services/services";
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            elements: [],
            recomendationList: [],
            columns: [
                // {header: 'ID', field: 'id'},
                {header: 'Name', field: 'name'},
                {header: 'Cost', field: 'cost'},
                {header: 'Points', field: 'points'},
                {header: 'Surplus', field: 'surplus'},
                {header: 'Points per Value', field: 'point_per_value'}
            ],
            collections: [],
            size: 0
        } 
    }
    
    componentDidMount() {
        getRecomendation().then(data => {
            const params = new URLSearchParams(window.location.search)
            let size = null;
            if (params.has('size')) size = parseInt(params.get('size'))
            this.setState({recomendationList: data, size})
        })

        // this.handleClickHistory(225);
        
    }

    handleClickHistory = (id) => {
        getPlayerSurpluses(id).then(res => {

            this.setState({collections: [{dataSurpluses: res}, ...this.state.collections.map(o => o.dataSurpluses)]})
        })
    }

    setStyleByCondition = (data) => {
        let style = '';
        const chance = data.chance_of_playing_next_round
        if (chance && chance < 100) {
            if (chance > 75) {
                style = 'bg-yellow-200';
            } else if (chance > 50) {
                style = 'bg-yellow-300';
            } else if (chance > 25) {
                style = 'bg-orange-300';
            } else if (chance >= 0) {
                style = 'bg-red-300';
            }
        }
        return style
    }

    render() { 
        return (
            <Fragment>
                {/* {this.state.collections.length > 0 && (<SurplusLineChart collections={this.state.collections} label={'gameweek'} values={'point_per_value'}/>)} */}

                <BubblePointsVsValue data={this.state.recomendationList} size={this.state.size}/>
                {/* {this.state.collections.length === 0 && (<Table list={this.state.recomendationList} 
                columns={this.state.columns} 
                styleRowCondition={this.setStyleByCondition}
                dataAndColCondition={(data) => { return data.data.in_dreamteam && data.field === 'name' ? (
                <svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                ) : ''}}
                onClick={this.handleClickHistory}/>)} */}
            </Fragment>
        );
    }
}
 
export default Main;