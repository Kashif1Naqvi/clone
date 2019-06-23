import React, { Component } from 'react'
import Dashboard from './component/Dashboard'
import Login from './component/Route/Login'
import ShowData from './component/ShowData'
import {BrowserRouter as Router ,Route, Redirect, } from 'react-router-dom'
import NewsList from './component/NewsList';
class Main extends Component {
  program = () => {
    return <NewsList  />
  }

  render() {
    console.log(NewsList.props)
    return (
      <div className="bg-lighter">
        <Router>
          <div className="container">
            <Route  path = "/dashboard/" component={()=>localStorage.token == null ? <Redirect to="/" /> :  <Dashboard /> }  />
            <Route exact path="/" component={Login} />
            <Route exact path="/hello" render={(props)=><ShowData data={this.program}  />} />
          </div>
        
        </Router>
      </div>
    )
  }
}
export default Main

const Notfound = () => {
  return <h1>Data not founf</h1>
}