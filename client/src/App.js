import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import FoodList from './components/FoodList';
import FavsList from './components/FavsList';
import ItemModal from './components/ItemModal';
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
    console.log(num)
  }
  addToFavs = (item)=> {
    this.setState(()=>{
      this.state.favorites.push(item);
      return {favorites:this.state.favorites}
    })
  }
  
  render(){
    let content= null;
    if(this.state.whatToShow === 1){
      content =
      <Container>
        <ItemModal />
        <hr></hr>  
        <FoodList changeView={this.changeView} addToFavs={this.addToFavs}/>
      </Container>
    }
    else {
      content = 
      <Container>
        <FavsList />
      </Container>
    }
    return(
      <Provider store={store}>
        <div className="App">
          <AppNavbar changeView={this.changeView} />
          <div>{content}</div>
        </div>
      </Provider>
      
    );
  } 
}

export default App;
