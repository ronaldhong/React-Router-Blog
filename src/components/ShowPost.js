import React, {Component} from 'react';
import {NavLink,Link} from 'react-router-dom';

class ShowPost extends Component {
  constructor(props){
    super(props)
    this.state={
      post:{}
    }
  }
  componentDidMount(){
    let {id}=this.props.match.params
    let link=`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`
    fetch(link).then(response=>{
      return response.json()
    }).then(data=>{
      console.log(data);
      this.setState({post: data})
    })
  }

  render() {
    let post= this.state.post
    return (
      <div>
        <div>
          <h3 className="post-title">Title: {post.title}</h3>
          <h5 className="post-name">Name: {post.name}</h5>
          <h6 className="post-post">{post.blog}</h6>
        </div>
      </div>
    )
  }
}

export default ShowPost;
