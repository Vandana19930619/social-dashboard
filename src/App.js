import React from 'react'

import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter, Route, Link} from 'react-router-dom'

function App (props){
    return(
            <BrowserRouter>
                    <div>
                        {/* <Login/> */}
                        {/*
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/task">Task</Link>
                        <Link to="/users">UsersList |</Link>
                        <Link to="/posts">PostsList</Link>

                        */
                        }
                        <Link to="/">Home |</Link>
                        
                       
                         <Route path="/" component={Login}/> 
                         <Route path="/dashboard/:id" component={Dashboard}/>  

                      
                                           
                    </div>
                   
             </BrowserRouter>             
    )
}
export default App