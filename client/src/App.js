import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import FoodList from './components/FoodList';
import FavsList from './components/FavsList';
import ItemModal from './components/ItemModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Container} from 'reactstrap';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  state ={
    whatToShow:1
  }

  changeView =(num)=>{
    this.setState({
        whatToShow: num
    })
  }
  
  render(){
    let content= null;
    if(this.state.whatToShow === 1){
      content =
      <Container>
        <ItemModal /> 
        <FoodList changeView={this.changeView} />
      </Container>
    }
    else if(this.state.whatToShow === 3){
      content =
      <Container>
        <Contact />
      </Container>
    }
    else {
      content = 
      <Container>
        <FavsList />
      </Container>
    }
    return(
      <Provider store={store} >
        <div className="App" >
          <AppNavbar changeView={this.changeView} />
          <div>{content}</div>
          <Footer />
        </div>
      </Provider>
      
    );
  } 
}

export default App;
