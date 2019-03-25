import React, {Component} from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header';
import Footer from '../components/Footer';

class ContactPage extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default ContactPage;