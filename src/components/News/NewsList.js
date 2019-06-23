import React,{Component} from 'react'

class NewsList extends Component{
    constructor(props){
        super(props)
        this.state = {
            show:false
        }
        this.showData = this.showData.bind(this)
    }
    showData(){
        this.setState(res=>({
            show:!res.show
        }))
    }
    render(){
        const {title,author,publishedAt,content,description,url,source,urlToImage} = this.props
        console.log(source.name)
        return(
            
                <div className="col-sm-6 col-lg-4 col-xl-4 col-md-4 border container-fluid ">
                    <section className="content" id="services" >
                        <figure className="figure" >
                            {urlToImage===null ? <p>image not found</p> :<img src={urlToImage} alt="data not found" className="img-fluid rounded " /> }
                        </figure>
                        <div className="h7 text-muted">{title}</div >
                        <p className="text-center">{author}</p>
                        {this.state.show ?(
                        <div>
                            <p>{content}</p>
                        <blockquote className="blockquote" >
                            {description}
                        </blockquote>
                        <b>PublishedAt:<i>{publishedAt}</i></b>
                        <a href={url} className="btn btn-success" target="_blank" rel="noopener noreferrer" >See Full Article</a>
                        <button className="btn btn-primary" onClick={this.showData} >Show less</button>
                        </div>):<button className="btn btn-primary"  onClick={this.showData} >Show More</button> }   
                    </section>
                </div>
        )
    }
}
export default NewsList