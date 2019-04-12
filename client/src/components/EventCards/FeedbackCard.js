import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';


class FeedbackCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events:[],
            id:'',
            remaining_places:'',
            name:'',
            location:'',
            about:'',
            price:[],
            speakers:[],
            topics:[],
            type:[],
            partner_initiated:'',
            message:'',
            range:0, 
            submitState:false



        }
    }
    componentDidMount() {
        console.log(this.props.data)
        this.setState({id:this.props.data._id})
            this.setState({name:this.props.data.name})
            this.setState({remaining_places:this.props.data.remaining_places})
            this.setState({location:this.props.data.location})
            this.setState({about:this.props.data.about})
            this.setState({price:this.props.data.price})
            this.setState({speakers:this.props.data.speakers})
            this.setState({topics:this.props.data.topics})
            this.setState({type:this.props.data.type})
            this.setState({partner_initiated:this.props.data.partner_initiated})


    }
    
    sbmtbtn() {
        this.setState({submitState:true})
        const url='http://localhost:4000/api/events/'+this.state.id +'/feedback'
        axios.post(url,{
            user_id:"5cae2d049cd95a5754daa7e4", //da ghalat
            comment:this.state.message,
            rate:this.state.range

        })
    }
    

    handleChangeText = event => {
        this.setState({ message: event.target.value })
    }
    handleRange= event =>{
        this.setState({ range: event.target.value })
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
                        <div class="col s12 m6">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <div class="card__meta">
                                        <a href="card">Event</a>
                                        <time>{}</time>
                                    </div>
                                    <span class="card-title">{this.state.name}</span>
                                    {/* <p><b>Remaining Places:</b> {this.state.remaining_places}</p> */}
                                    <p><b>Location:</b> {this.state.location}</p>
                                    <p><b>About:</b> {this.state.about}</p>
                                    {/* <p><b>About:</b> {this.state.events}</p> */}
                                    <p><b>Price:</b> {this.state.price}</p>
                                    <p><b>Speakers:</b> {this.state.speakers}</p>
                                    <p><b>Topics:</b> {this.state.topics}</p>
                                    <p><b>Type:</b> {this.state.type}</p>
                                    <form action="#">
                                    <p class="range-field">
                                    <label>Rating</label>
                                        <input onChange={this.handleRange} type="range" id="test5" min="1" max="5" />
                                        </p>
                                    </form>
                                    <input onChange={this.handleChangeText} placeholder="Enter Feedback" id="feedback" type="text" class="validate"/>
                                    <a onClick={()=>this.sbmtbtn()} class="waves-effect waves-light btn">Submit</a>
                                </div>
                                <div class="card-action">
                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                
        }
}



export default FeedbackCard;