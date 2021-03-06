import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';


class ViewPendingEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elements:[],
            _id:'',
            remaining_places:'',
            name:'',
            location:'',
            about:'',
            price:[],
            speakers:[],
            topics:[],
            type:[],
            partner_initiated:'',
            status:'',
            attendees:[],
            time_of_edit:'',
            feedbacks:[],
            responses_from_admin:[],
            applicants:[],
            response:'',
            is_accepted:false,
            partner:''

        }
    }
    handleChangeText =(event) => {
        this.setState({response:event.target.value})
    }
    async componentDidMount() {
        var loctaionid=''
        this.setState({
            id: this.props.value
        })
        
        
       await axios.get('https://ateamse2.herokuapp.com/api/events/getid/'+this.props.value)
            .then(res => {
                this.setState({
                    remaining_places: res.data.data.remaining_places
                })
                this.setState({
                    _id: res.data.data._id
                })
                this.setState({
                    name: res.data.data.name
                })
                // this.setState({
                //     location: res.data.data.location
                // })
                loctaionid=res.data.data.location
                this.setState({
                    about: res.data.data.about
                })
                this.setState({
                    price: res.data.data.price
                })
                this.setState({
                    speakers: res.data.data.speakers
                })
                this.setState({
                    topics: res.data.data.topics
                })
                this.setState({
                    type: res.data.data.type
                })
                this.setState({
                    partner_initiated: res.data.data.partner_initiated
                })
                this.setState({
                    status: res.data.data.status
                })
                this.setState({
                    attendees: res.data.data.attendees
                })
                this.setState({
                    time_of_edit: res.data.data.time_of_edit
                })
                this.setState({
                    feedbacks: res.data.data.feedbacks
                })
                this.setState({
                    responses_from_admin: res.data.data.responses_from_admin
                })
                this.setState({
                    applicants: res.data.data.applicants
                })
                this.setState({
                    partner:res.data.data.partner_initiated
                })
              
            })
            .catch(err => {
                console.log(err)
            })
                await axios.get('https://ateamse2.herokuapp.com/api/locations/'+loctaionid)
                .then(res=>{
                    console.log(res)
                    var c= ""+res.data.data.title+", "+res.data.data.subtitle
                    this.setState({location:c})
                })
                .catch(err=>{
                    console.log(err)
                })
           
    }
    sbmtbtn() {
        this.setState({submitState:true})
        const url='https://ateamse2.herokuapp.com/api/events/'+this.state.id +'/adminresponse'
        axios({
        method: "POST",
        url: url,
        headers: {
            authorization: localStorage.getItem("token")
        },
        data: {
            response: this.state.response,
            is_accepted: this.state.is_accepted
        }
        }).then(res => {
        console.log("geh hena?");
        console.log(res);
        });
    }
    accept(){
        this.setState({is_accepted:true})
     
        axios.put('https://ateamse2.herokuapp.com/api/events/' + this.props.value, {
            status: 'ACCEPTED'
        })
        axios.post('https://ateamse2.herokuapp.com/api/users/'+this.state.partner+'/addcreatedevent', {
            eventid:this.state.id
        })
    }


    render() {

        return (
        
<div>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
            
	<div class="" >
			<div class="card blue-grey darken-1">
				<div class="card-content white-text">
					<div class="card__meta">
						<a href="card">Project</a>
						<time>{}</time>
					</div>
					<span class="card-title">{this.state.name}</span>
					<p><b>Remaining Places:</b> {this.state.remaining_places}</p>
                    <p><b>Data:</b> {this.state.data}</p>
                    <p><b>Location:</b> {this.state.location}</p>
                    <p><b>Price:</b> {this.state.price}</p>
                    <p><b>Speakers:</b> {this.state.speakers}</p>
                    <p><b>Topics:</b> {this.state.topics}</p>
                    <p><b>Type:</b> {this.state.type}</p>
                    <p><b>Partner:</b> {this.state.partner_initiated}</p>
                    <p><b>Status:</b> {this.state.status}</p>
                    <p><b>Attendees:</b> {this.state.attendees}</p>
                    <p><b>Time of edit:</b> {this.state.time_of_edit}</p>
                    {/* <p><b>Feedback:</b> {this.state.feedbacks}</p>
                    <p><b>Response:</b> {this.state.responses_from_admin}</p>
                    <p><b>Applicants:</b> {this.state.applicants}</p> */}

				</div>
                
				<div class="card-action">
                <p>
                    <label>
                    <input onChange={this.handleChangeText} placeholder="Enter Feedback" id="feedback" type="text" class="validate"/>
                                    <a onClick={()=>this.sbmtbtn()} class="waves-effect waves-light btn">Submit</a>
                   
                    </label>
                </p>

            <a onClick={()=>this.accept()} class="waves-effect waves-light btn">Accept</a>
				</div>
			</div>
		</div>
</div>
        )
    }

}



export default ViewPendingEvents;