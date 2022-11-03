import React, { Component } from 'react'

export default class Box extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            result:this.props.result,
        }
      
    }
  render() {
    return (
      <div className='bg-info text-white mt-5 p-5'>
        <div className='container'>
          <div className='row'>
            <h2>Your BMI is : {this.state.result ?? "empty"}</h2>
          </div>
          </div>
        
      </div>
    )
  }
}