import React, { Component } from "react";
import "../../css/navbar.css";
class NavBar extends Component {
  render() {
    return (
     
          <nav>
        <ul id="dropdown11" class="dropdown-content">
          <li>
            <a href="/submit_task">Post a Task</a>
          </li>
          <li>
            <a href="/recommend">Recommend Tasks</a>
          </li>
          <li>
            <a href="/task_control_panel">Task Control Panel</a>
          </li>
          <li>
            <a href="/get_tasks">Get Tasks</a>
          </li>
          <li>
            <a href="/Review">Review task</a>
          </li>
          <li>
            <a href="/ViewTaskApplicants">View applicants</a>
          </li>
          <li>
            <a href="/task_card">Task Cards</a>
          </li>
          <li>
            <a class="ili" href="/StoryOnePointEleven">
              Tasks i applied on
            </a>
          </li>
        </ul>
        <ul id="dropdown111" class="dropdown-content">
          <li>
            <a href="/Event">Events</a>
          </li>
          <li>
            <a href="/Partner_Requests">Partner Requests</a>
          </li>
          <li>
            <a href="/locations">locations</a>
          </li>
          <li>
            <a href="/Create_Events">Create_Events</a>
          </li>
          <li>
            <a href="/test">Card Test</a>
          </li>
          <li>
            <a href="/eventmodule">Events Module</a>
          </li>
        </ul>
        <ul id="dropdown1111" class="dropdown-content">
          <li>
            <a class="ili" href="/skills">
              Skill Panel
            </a>
          </li>
          <li>
            <a class="ili" href="/register">
              Register
            </a>
          </li>
          <li>
            <a class="ili" href="/Admin">
              Admin Panel
            </a>
          </li>
          <li>
            <a class="ili" href="/Review">
              Review
            </a>
          </li>
        </ul>
        <ul id="dropdown11111" class="dropdown-content">
          <li>
            <a class="ili" href="/viewallproj">
              All Projects
            </a>
          </li>
          <li>
            <a class="ili" href="/post_project">
              Post a Project
            </a>
          </li>
        </ul>
        <div class="nav-wrapper">
          <ul class="left hide-on-med-and-down">
            <li>
              <a href="/">
                <i class="material-icons">home</i>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/SE-GUC/A-Team" title="Git-Hub">
                <i class="material-icons">storage</i>
              </a>{" "}
            </li>
            <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown11111">
                Projects<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown1111">
                Admin<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown111">
                Events<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>

            <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown11">
                Tasks<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
     
    );
  }
}

export default NavBar;
