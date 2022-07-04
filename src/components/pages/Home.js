import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

class Home extends Component {

    render() {
        return  (
           <div>
               <Header 
                title="Welcome To My React Based Site"
                subtitle="IT'S NICE TO MEET YOU!!"
                buttonText="Tell me more"
                link="/services"
                showButton={true}
                image={image}
               />
           </div> 
        )
    }
}

export default Home; 