import React from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Venue from './VenueComponent';
import Store from './StoreComponent'
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';



function Main(){
    return(
        <div>
           <Header/>          
           <Switch>
                   <Route path='/home' component={Home} />
                   {/* <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} /> */}
                   {/* <Route path='/directory/:campsiteId' component={CampsiteWithId} />                  */}
                   {/* <Route exact path='/contactus' component={Contact} /> */}
                   {/* <Route exact path='/contactus' render={() => <Contact />} /> */}
                   <Route exact path='/aboutus' component={About} />
                   <Route exact path='/venue' component={Venue} />
                   <Route exact path='/store' component={Store} />
                 <Redirect to='/home' />
                </Switch>

           <Footer/>
       </div> 
    );
}

export default Main;

