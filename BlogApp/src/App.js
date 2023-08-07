import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import AddEditBlogs from './pages/AddEditBlogs';
import ViewBlogs from './pages/ViewBlogs';
import About from './pages/About';
import Header from './component/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
       <div className="App">
      <ToastContainer/>

       <Header/>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/addBlog" component={AddEditBlogs}/>
        <Route  path="/editBlog/:id" component={AddEditBlogs}/>
        <Route  path="/viewBlog/:id" component={ViewBlogs}/>
        
       </Switch>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
