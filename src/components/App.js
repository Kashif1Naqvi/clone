import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewsList from './News/NewsList';

class App extends Component{
  constructor(props){
    super(props)
    this.state = { news:[]  }
  }
  componentDidMount(){
    const url = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-10&sortBy=publishedAt&apiKey=c0d8aaed92ed4f2386d3d1e698b17284"
    fetch(url)
      .then(res=>res.json())
      .then(data=>{this.setState({ news:data.articles })})
      .catch(err=>err)  
  }
  render(){ 
    const newsList = this.state.news.map((news)=>{
      return <NewsList {...news} key={news.url} />  
    })

  return (
    <div className="container">
      <h1 className="text-center" >BBC NEWS</h1>
      <div className="row" >
        {newsList}
      </div>
    </div>
  )
}
}

export default App;
