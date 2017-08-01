import React, {Component} from 'react';
import {NavLink,Link} from 'react-router-dom';

class CreatePost extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      title:"",
      blog:""
    }
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handleTitleChange=this.handleTitleChange.bind(this)
    this.handleBlogChange=this.handleBlogChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleNameChange(e){
    this.setState(
      {name:e.target.value })
  }
  handleTitleChange(e){
    this.setState(
      {title:e.target.value}
    )
  }
  handleBlogChange(e){
    this.setState(
      {blog:e.target.value}
    )
  }
  handleSubmit(e){
    e.preventDefault()
    let listItem =JSON.stringify(this.state)
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: 'POST',
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then(response => {
    console.log(response, 'yay')
  }).catch(err => {
    console.log(err, 'boo!')
  })
    this.setState({name: '', title: '', blog: ''})
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Author's Name:</label>
            <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-name"  placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input onChange={this.handleTitleChange} value={this.state.title}  type="text" className="form-title"  placeholder="Title" />
          </div>
          <div className="form-group">
            <label>Write your blog...</label>
            <textarea onChange={this.handleBlogChange} value={this.state.blog} type="text" className="form-blog" rows="5"  placeholder="What's on your mind?" />
          </div>
        <button type="submit" redirect="/">Submit Post</button>
        </form>
        <div>
          <a href="/">Back to Homepage</a>
        </div>
      </div>
    )
  }
}

export default CreatePost;
