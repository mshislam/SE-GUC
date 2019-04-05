import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Table from './Table'



class EventList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            events:[],
            loading:true,
            error:null
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/api/events`)
            .then(res => {
                console.log(res.data.data)
                this.setState({events: res.data.data});
                this.setState({loading: false})
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });

    }
    renderLoading() {
        return <div>Events are fetching from database...</div>
    }
    renderError() {
        return (
            <div>
                Ew3a, : {this.state.error.message}
            </div>
        )
    }
    // renderEvents() {
    //     if(this.state.error) {
    //         return this.renderError();
    //     }
    //     return(
    //     <ul>
    //         {this.state.events.map(event =>
    //             <li key={event._id}>{event.remaining_places}</li>
    //             )}
    //     </ul>
    //     )
    // };

    
    render() {
        if(this.state.loading) {
            return this.renderLoading()
        }
        else
        return(
            <div className="m">
            
            <p className="Table-header" align="center">Events</p>
            <Table data={this.state.events}/>             
            </div>

           
        )
    }
}
ReactDOM.render(
    <EventList subreddit="reactjs"/>,
    document.getElementById('root')
)

export default EventList;