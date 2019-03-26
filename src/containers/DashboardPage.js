import React, {Component} from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header';
import Footer from '../components/Footer';

import {
    Redirect
} from 'react-router-dom'

class DashboardPage extends Component{
    constructor(props){
        super(props);

        console.log(props.match.params.category)

        this.state={
            loggedIn:true
        }
    }

    render(){
        if(!this.state.loggedIn){
            return (
                <Redirect to="/login"/>
            )
        }

        return (
            <div>
                <Header/>
                <Dashboard/>
                <Footer/>
            </div>
        )
    }
}

export default DashboardPage;