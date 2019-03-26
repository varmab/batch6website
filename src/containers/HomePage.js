import React, {Component} from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';

class HomePage extends Component{
    render(){
        return (
            <div>
                <Header/>
                <About/>
                <Services/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;