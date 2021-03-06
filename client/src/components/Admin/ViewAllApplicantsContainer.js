import Card from './EventCard'
import React from 'react'
import axios from 'axios'

class ViewAllApplicantsContainer extends React.Component {  

    constructor(props) {
        super(props)
        this.state = {
            elements:[],
            events:[],
            remaining_places:'',
            name:'',
            location:'',
            about:'',
            price:[],
            speakers:[],
            topics:[],
            type:[],
            partner_initiated:'',
            loading: true
        }
    }
    componentDidMount() {
        axios.get('https://ateamse2.herokuapp.com/api/events/')
            .then(res => {
                // this.setState({events: res.data.data})
                this.setState({elements:res.data.data})
                this.setState({loading:false})
            })
            .catch(err => {
                console.log("oislijdlijSfiz")
            })
    }

    render() {  
        if(!this.state.loading) {
        var elements1=[];
        const events=this.state.elements
        for(var i=0;i<this.state.elements.length;i++){
            console.log(events[i]._id)
            elements1.push(<Card data ={events[i]}/>);
        }
        return (
            <div> 
            {elements1}
            </div>
        );
        }
        else
        {
            return (
                <div>
                    Hello
                </div>
            )
        }
    }
}
export default ViewAllApplicantsContainer;