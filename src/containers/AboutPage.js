import React, {Component} from 'react'
import About from '../components/About'
import Header from '../components/Header';
import Footer from '../components/Footer';

class AboutPage extends Component{
    render(){
        return (
            <div>
                <Header/>
                <About/>
                <Footer/>
            </div>
        )
    }
}

export default AboutPage;