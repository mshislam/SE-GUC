import Card from './EventPartnerFeedbackCard'
import React from 'react'
import axios from 'axios'
import '../../css/TaskCardContainer.css'
class EventsCardContainer extends React.Component {  

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
            loading: true,
            limit:0
        }
    }

    componentDidMount() {
        axios('https://ateamse2.herokuapp.com/api/users/getCreatedEvents', {
            method: 'GET',
            headers: {
              'authorization': localStorage.getItem('token')
            }
          })
          .then(res => {
            console.log(res)
            this.setState({elements:res.data.data})
            this.setState({loading:false})
            })
          .catch(err => { 
              console.log('feih error')
              console.log(err) })
    }
    render() {  
        if(!this.state.loading) {
        var elements1=[];
        const events=this.state.elements
        console.log(events)
        for(var i=0;i<this.state.elements.length;i++){
                console.log(events[i])
                elements1.push(<Card data ={events[i]}/>);
            
        }
        return (
            <div class="container">
                <div class="row">
                    <div class = "row s2">  
                        {elements1}
                    </div>
                </div>
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
export default EventsCardContainer;