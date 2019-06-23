import React,{Component} from 'react'
import {withRouter,Link,Route, Switch, BrowserRouter as R } from 'react-router-dom'
import ShowData from './ShowData';
class NewsList extends  Component{
	constructor(props){
		super(props)
		this.state = { show:false }
	}
	handleShow = () =>{
		this.setState(res=>({
			show: !res.show
		}))
	}
	

	// handleDisplay =()=>{
	// 	this.props.history.push('/hello')
	// }

	render(){
		console.log()
		const {title,description,urlToImage,author,publishedAt,content,source,url} = this.props.news
		return(
			<R>
			<div className="col-sm-4 col-md-4 col-xl-4 col-lg-4">
			<a href="/hello" >			            <Route  path="/hello" component={()=><ShowData  />} />Click</a>
				<figure className="figure">
				<button onClick={this.handleDisplay} >Click me</button>
					<img src={urlToImage} onClick={this.handleShow}  data-toggle="modal" data-target="#exampleModalLong"   width="70%" height="60%" className="img-fluid  rounded"  alt="Data not found"/>
				</figure>
				
				<button onClick={this.handleDisplay} >click</button>
				<div className={this.state.show ? "":"model fade"} id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
					<div className="modal-dailog " role="document">
						<div className="pt-2 mt-2 model-content ">
								<div className="model-header">
									{
										this.state.show ? 
											<div className="model-body m-10 " >
												<h3 className="h3 text-muted">{title}</h3>
												<div className="content">{description}</div>
													<b>Author of this is: {author}</b>
													<b>PublishedAt:{publishedAt}</b>
													<b>{content}</b>
													<b>You check the source from <i>{source.name}</i></b><br/>
													<div className="mb-sm-1 pb-10" >
														<a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-primary" >See Full Article</a>
														<button className="btn btn-info" onClick={this.handleShow} >Show Less</button>
													</div>
												</div>
										:""
									}
								</div>
							</div>
						</div>
			
							
			            {/* <Route  path="/hello" component={()=><ShowData  />} /> */}
					</div>
				</div>        
			</R>
		)
	}
}
export default withRouter(NewsList)