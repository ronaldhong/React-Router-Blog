import React, {Component} from 'react';
import {NavLink,Link} from 'react-router-dom';

class PostList extends Component {
  constructor(props){
    super(props)
    this.state={
      posts: []
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger').then(result =>{
      return result.json()
    }).then(data=>{
      console.log(data);
      this.setState({posts:data})
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Post List</h1>
        </div>
        {this.state.posts.map((result)=>
          <div>
            <Link to={`/show/${result._id}`}>
            <ul>
              <li>Title:</li>
              <li>{result.title}</li>
            </ul>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default PostList;
