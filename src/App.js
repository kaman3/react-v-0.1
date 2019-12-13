import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import About from "./components/about";

class App extends React.Component{
  render(){
    return (
      <div className = "container-fluid">
          <Header/>
              <Switch>
                  <Route exact path='/' component={Content}/>
                  <Route path='/about_us' component={About}/>
              </Switch>
          <Footer/>
      </div>
    );
  }
}

export default App;
