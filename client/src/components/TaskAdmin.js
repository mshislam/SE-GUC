import Card from './TaskAdminCard';
import React from 'react';
import axios from 'axios'
import '../css/TaskCardContainer.css'

class TaskAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            elements: [],
            name: '',
            description: '',
            monetary_compensation: '',
            status: '',
            skills: [],
            _id: '',
            time_of_post: '',
            time_expected: '',
            level_of_commitment: '',
            experience_needed: '',
            loading: true,
            getAllTasks:false,
            loadMore:false,
            limit: 0
        }
    }
    getTasks=(e)=>{
        console.log(this.state.getAllTasks)
        this.setState({
            getAllTasks:true
        })
        console.log(this.state.getAllTasks)
    }
    loadMore=(e)=> {
        this.setState({
            limit:this.state.limit+20
        })
    }
    componentDidMount() {
       
        axios.get('https://ateamse2.herokuapp.com/api/tasks/view_pending')
            .then(res => {
                this.setState({
                    elements: res.data.data
                })
                this.setState({
                    loading: false
                })
                
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        if(this.state.getAllTasks === false) {
            return(
            <div>
            <button class="waves-effect waves-light btn-small green " type="submit" name="action" onClick={this.getTasks}>View All Tasks</button>
            </div>
            )
        }
        if(!this.state.loading) {
            var elements1=[];
            const tasks = this.state.elements
            for(var i = 0;i < this.state.elements.length;i++) {
                if(i <= this.state.limit) {
                elements1.push(<Card value={tasks[i]._id}/>)
                }
               
                
            }
            
        //pushed
        if(this.state.getAllTasks) {
        return( 
                <div class="container">
                    <button class="waves-effect waves-light btn-small green" type="submit" name="action" onClick={this.loadMore}>Load More</button>
                    <div class="row">

                        <div class="col s2">{elements1}</div>
                    </div>
                </div>
        );
        }
        } else {
            return(
                <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
            )
        }
    }

}
export default TaskAdmin;