import React, { Component } from 'react';
import TaskDateField from './TaskDateField';
export class NumberSlider extends Component {
  constructor(props){
    super(props)
    this.number= React.createRef()
    this.dur=React.createRef()
    console.log(props)
  }
  handlechange=(e)=>{
    this.props.func(e.target.value) // number + days
    console.log(e.target.value)
  }
  refresh=()=>{
   var status= document.getElementById('textInput'+this.props.cid).innerText+ ' '+document.getElementById('ddl_date'+this.props.cid).value
   console.log(status)
  } 
  render() {
    
      
    return (
        <div onChange={this.refresh}>
        <table>
            <tr><td>{this.props.fieldname}: <label  id={'textInput'+this.props.cid} >1</label></td>
                <td>
                  <select id={'ddl_date'+this.props.cid}>
                    <option value="Hour(s)">Hour(s)</option>   
                    <option selected value="Day(s)">Day(s)</option>
                    <option value="Week(s)">Week(s)</option>
                    <option  value="Month(s)">Month(s)</option>
                    <option value="Year(s)">Year(s)</option>
                  </select>
                  </td>
            </tr>
            <tr><td><input id={'slider'+this.props.cid} type='range' min='1' max='31'  step='1'onChange={
            ()=>{
                document.getElementById('textInput'+this.props.cid).innerText=document.getElementById('slider'+this.props.cid).value
            }
        
        } ></input></td></tr>

        </table>
        
        
       
        </div>
    ) 
  }
}

export default NumberSlider;