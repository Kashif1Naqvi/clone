import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
class ShowData extends Component {
    click = () =>{
        this.props.history.push('/dashboard')

    }
    render() {
        console.log("data is",this.props.data)
        return (
            <div>
            <button onClick={this.click} className="btn btn-primary">Back</button>
            
            
            
        </div>
 
        )
    }
}

export default withRouter(ShowData)