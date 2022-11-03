import React, { Component } from 'react';
import Box from './Box.js'
export default class Form extends Component {
    constructor(props) {
    super(props)
    this.state = {
        metricChoice:true,
        result:null
    };
}
    checkData = (e) => {
        e.preventDefault();
        if(this.state.metricChoice) {
            let metric = e.target.width.value / Math.pow(e.target.height.value, 2);
            metric = metric.toFixed(2);
            this.setState({result : metric},() => {
                console.log(this.state.result);
            });
            e.target.height.value = "";
            e.target.width.value = "";
        }else{
            let Imperial = (e.target.width.value / Math.pow(e.target.height.value, 2)) * 703; 
            Imperial = Imperial.toFixed(2);
            this.setState({result : Imperial},() => {
                console.log(this.state.result);
            });
            e.target.height.value = "";
            e.target.width.value = "";
        }
        
        

    }
  render() {
    return (
      <div className="mt-5">
        <div className="row">
            <div className="col-12 col-lg-6 col-sm-4">
                <button className='btn btn-primary m-2' onClick={() => this.setState({metricChoice : true})} disabled={this.state.metricChoice}>Metric</button>
                <button className='btn btn-primary m-2' onClick={() => this.setState({metricChoice : false})}disabled={!this.state.metricChoice}>Imperial</button>
            </div>
        </div>
        <form onSubmit={this.checkData}>
            <h1>{this.state.metricChoice ? "Metric" : "Imperial"}</h1>
        <div className="mb-3">
            <label>Height</label>
            <input type="text" className="form-control w-50" name="height" />
        </div>
        <div className="mb-3">
            <label>Width</label>
            <input type="text" className="form-control w-50" name="width" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {
            this.state.result ? <Box result={this.state.result}/> : ""
        }
        
      </div>
    )
  }
}