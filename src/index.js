import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
//import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Components
import BaseLayout from "./components/BaseLayout"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import ShowPost from "./components/ShowPost"
import App from "./components/App"


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path ="/" component={App} />
        <Route path ="/create" component={CreatePost} />
        <Route path ="/post" component={PostList} />
        <Route path ="/show/:id" component={ShowPost} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
