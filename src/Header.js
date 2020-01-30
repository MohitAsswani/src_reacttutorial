import React, {Component} from 'react';
import Background from './img/bg.jpg';
import'./Header.css';

const myStyles = {
    backgroundImage: `url(${Background})`,
    height: '80vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

class Header extends Component{


    render(){
        return(

            <header style= {myStyles}>
            
            <h1>{this.props.headTitle}</h1>
            <a href="#button">{this.props.button}</a>
            </header>
        )
    }


}

export default Header;