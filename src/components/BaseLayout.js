import React, {Component} from 'react';
import {NavLink,Link} from 'react-router-dom';

class BaseLayout extends Component {

  render() {
    return (
      <div>

        <div className="BaseLayout-nav">
          <h1><NavLink exact to="/"> PollyBlog</NavLink></h1>
          <nav>
            <NavLink to="/create" activeStyle={{activeStyle:"white"}}>Create Post</NavLink>
            <NavLink to="/post">Show Post</NavLink>
          </nav>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;
