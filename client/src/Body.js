import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import TaskControl from './TaskControl';
import Dummy from './components/Dummy'
import TaskList from './components/TaskList'
import TaskPostForm from './components/TaskPostForm'
import Recommend from './components/Recommend';
import Review from './components/StoryOnepointTwo';
import StoryOnePointEleven from './components/StoryOnePointEleven'
import Partnerreq from './components/PartnerRequests'
import Locationcomps from './components/Locationcomps'
import CreateEvent from './components/CreateEvent'
import TaskPanelA from './components/TaskAdmin'
import ApplyProject from './components/ApplyForProj'
import CancelApp from './components/CancelApp'
import ViewAllProjectsComponent from './components/Admin/ViewAllProjectsComponent';
import ViewAllEventsContainer from './components/Admin/ViewAllEventsContainer';
import ViewPendingEventsComponent from './components/Admin/ViewPendingEventsComponent'
import MainPage from './components/Admin/MainPage'
import Skills from './components/Admin/SkillController'
import 'materialize-css/dist/css/materialize.min.css';
import ViewTApplicants from './components/ViewTaskApplicants';
import ProjectPostForm from './components/ProjectPostForm'
import EventCard from './components/EventCards/EventsCardContainer'
import Home from './components/HomePage'
import Feedback from './components/EventCards/FeedbackCardContainer'
import ApplicationCard from './components/EventCards/ApplicationCardContainer'
import EventsPartner from './components/EventCards/EventsPartnerContainer'
import EventsPartnerFeedbacks from './components/EventCards/EventPartnerFeedbackContainer'
import TaskCardContainer from './components/TaskCardContainer'
import Register from './components/Authentication/Register'
import NavPartner from './components/Authentication/NavPartner'
import NavCA from './components/Authentication/NavCA'
import NavAdmin from './components/Authentication/NavAdmin'
import NavMemeber from './components/Authentication/NavMember'
import Filter from './components/EventCards/FilterEventsContainer'
import Email from './components/PostNotification'
import LoginPage from './components/Authentication/LoginPage'
import './css/navbar.css'
import LocationPost from './components/LocationPost';
class ComponentName extends Component {
  render () {
    return (
    <div>
    <Route path="/homepage" component={Home} />
    <Route path="/homepage/get_tasks" component={TaskList}/>
    <Route path="/homepage/filter" component={Filter} />
    <Route path="/homepage/task_card" component={TaskCardContainer} />
    <Route path="/homepage/viewallproj" component={ViewAllProjectsComponent} />
    <Route path='/homepage/register' component={Register}/>
    <Route path='/homepage/login' component={LoginPage}/>

      <Route path="/partner" component={NavPartner}/>    
      <Route path="/partner/Events" component={EventCard} />
      <Route path="/partner/myevents" component={EventsPartner} />
      <Route path="/partner/Create_Events" component={CreateEvent} />
      <Route path="/partner/feedback" component={Feedback}/>    
      <Route path="/partner/appcard" component={ApplicationCard}/>    
      <Route path='/partner/partnerfeedbacks' component={EventsPartnerFeedbacks }/>
      <Route path='/partner/submit_task' component={TaskPostForm}/>
      <Route path="/partner/get_tasks" component={TaskList}/>
      <Route path="/partner/viewrtaskapplicants" component={ViewTApplicants}/>
      <Route path="/partner/task_card" component={TaskCardContainer} />
      <Route path="/partner/viewallproj" component={ViewAllProjectsComponent} />
      <Route path="/partner/post_project" component={ProjectPostForm}/>  
      <Route path="/partner/filter" component={Filter}/>        
      
      <Route path="/ca" component={NavCA}/>    
      <Route path="/ca/Events" component={EventCard} />
      <Route path="/ca/myevents" component={EventsPartner} />
      <Route path="/ca/Create_Events" component={CreateEvent} />
      <Route path="/ca/feedback" component={Feedback}/>    
      <Route path="/ca/appcard" component={ApplicationCard}/>    
      <Route path='/ca/partnerfeedbacks' component={EventsPartnerFeedbacks }/>
      <Route path='/ca/submit_task' component={TaskPostForm}/>
      <Route path="/ca/get_tasks" component={TaskList}/>
      <Route path="/ca/viewrtaskapplicants" component={ViewTApplicants}/>
      <Route path="/ca/task_card" component={TaskCardContainer} />
      <Route path="/ca/viewallproj" component={ViewAllProjectsComponent} />
      <Route path="/ca/post_project" component={ProjectPostForm}/>  
      <Route path="/ca/filter" component={Filter}/>  

      <Route path="/admin" component={NavAdmin}/>
      <Route path="/admin/viewallproj" component={ViewAllProjectsComponent} />
      <Route path="/admin/post_project" component={ProjectPostForm}/>  
      <Route path='/admin/submit_task' component={TaskPostForm}/>
      <Route path="/admin/get_tasks" component={TaskList}/>
      <Route path="/admin/locations" component={Locationcomps} />
      <Route path='/admin/skills' component={Skills}/>
      <Route path='/admin/admin' component={MainPage}/>
      <Route path="/admin/Review" component={Review} />
      <Route path="/admin/viewpendingevents" component={ViewPendingEventsComponent} />
      <Route path="/admin/Create_Events" component={CreateEvent} />
      <Route path="/admin/feedback" component={Feedback}/>    
      <Route path="/admin/appcard" component={ApplicationCard}/>    
      <Route path='/admin/partnerfeedbacks' component={EventsPartnerFeedbacks }/>
      <Route path="/admin/viewrtaskapplicants" component={ViewTApplicants}/>
      <Route path="/admin/StoryOnePointEleven" component={StoryOnePointEleven} />
      <Route path="/admin/TaskPanel" component={TaskPanelA} />
      <Route path="/admin/filter" component={Filter}/>  
      <Route path="/admin/Email" component={Email}/>
      <Route path="/admin/postLocations" component={LocationPost}/>    
      <Route path="/member" component={NavMemeber} />
      <Route path="/member/recommend" component={Recommend} />
      <Route path="/member/get_tasks" component={TaskList}/>
      <Route path="/member/task_card" component={TaskCardContainer} />
      <Route path="/member/StoryOnePointEleven" component={StoryOnePointEleven} />
      <Route path="/member/feedback" component={Feedback}/>    
      <Route path="/member/appcard" component={ApplicationCard}/>    
      <Route path='/member/partnerfeedbacks' component={EventsPartnerFeedbacks }/>
      <Route path="/member/viewallproj" component={ViewAllProjectsComponent} />
      <Route path="/member/filter" component={Filter}/>  
      <Route path="/post_project" component={ProjectPostForm}/>  
      <Route path="/feedback" component={Feedback}/>    
      <Route path="/appcard" component={ApplicationCard}/> 
      <Route path='/partnerfeedbacks' component={EventsPartnerFeedbacks }/>
      <Route path='/skills' component={Skills }/>
      <Route path="/task_control_panel" component={TaskControl} />
      <Route path="/get_tasks" component={TaskList}/>
      <Route path="/dummy" component={Dummy} />
      <Route path='/submit_task' component={TaskPostForm}/>
      <Route path="/recommend" component={Recommend} />
      <Route path="/Review" component={Review} />
      <Route path="/Partner_Requests" component={Partnerreq} />
      <Route path="/locations" component={Locationcomps} />
      <Route path="/Create_Events" component={CreateEvent} />
      <Route path="/applyproj" component={ApplyProject} />
      <Route path="/cancelapp" component={CancelApp} />
      <Route path="/viewallproj" component={ViewAllProjectsComponent} />
      <Route path="/viewallevents" component={ViewAllEventsContainer} />
      <Route path="/viewpendingevents" component={ViewPendingEventsComponent} />
      <Route path="/StoryOnePointEleven" component={StoryOnePointEleven} />
      <Route path='/register' component={Register}/>
      <Route  exact path='/' component={Dummy}/>
    </div>
    
    )}
}

export default ComponentName