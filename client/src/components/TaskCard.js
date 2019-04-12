import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

class TaskCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            name: '',
            description: '',
            monetary_compensation: '',
            status: '',
            skills: [],
            _id: '',
            time_of_post: '',
            time_expected: '',
            level_of_commitment: '',
            experience_needed: ''
        }
    }
    componentDidMount() {
        this.setState({
            id: this.props.value
        })
        console.log(this.props.value)
        const url = 'http://localhost:4000/api/tasks/read/' + this.props.value
        console.log(url)
        axios.get(url)
            .then(res => {
                this.setState({
                    name: res.data.data.name
                })
                this.setState({
                    _id: res.data.data._id
                })
                this.setState({
                    description: res.data.data.description
                })
                this.setState({
                    monetary_compensation: res.data.data.monetary_compensation
                })
                this.setState({
                    status: res.data.data.status
                })
                this.setState({
                    skills: res.data.data.skills
                })
                this.setState({
                    time_of_post: res.data.data.time_of_post
                })
                this.setState({
                    time_expected: res.data.data.time_expected
                })
                this.setState({
                    level_of_commitment: res.data.data.level_of_comitment
                })
                this.setState({
                    experience_needed: res.data.data.experience_needed
                })
            })
            .catch(err => {
                console.log(err)
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

    <div class="card">
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <div class="card__meta">
                        <a href="card">Task</a>
                        <time>{}</time>
                    </div>
                        <p><b>Description:</b> {this.state.description}</p>
                        <p><b>Monetary Compensation:</b> {this.state.monetary_compensation}</p>
                        <p><b>Status:</b> {this.state.status}</p>
                        <p><b>Skills:</b> {this.state.skills}</p>
                        <p><b>Time Posted:</b> {this.state.time_of_post}</p>
                        <p><b>Expected Time:</b> {this.state.time_expected}</p>
                        <p><b>Commtment Level Required:</b> {this.state.level_of_commitment}</p>
                        <p><b>Experience Needed:</b> {this.state.experience_needed}</p>

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

export default TaskCard;