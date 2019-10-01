import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import FoodList from './components/FoodList';
import FavsList from './components/FavsList';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap'


class App extends Component {
  state ={
    items:[],
    favorites:[],
    whatToShow:1
  }
  componentDidMount(){
    fetch('http://localhost:4000/items')
      .then((res)=>res.json())
      .then((items)=> {
        this.setState({items})
      })
      .catch(err=> console.log("Error Occured:" + (err)))
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
  addToItems = (item)=> {
    this.setState(()=>{
      this.state.items.push(item);
      return {items:this.state.items}
    })
  }
  deleteItem=(_id)=>{
    let favorites = this.state.favorites.filter(item => {
      return item._id !== _id
    });
    this.setState({
      favorites: favorites
    })
    console.log(favorites)
  }
  render(){
    let content= null;
    if(this.state.whatToShow === 1){
      content =
      <Container>
        <ItemModal items={this.state.items} addToItems={this.addToItems} />
        <hr></hr>  
        <FoodList items={this.state.items} changeView={this.changeView} addToFavs={this.addToFavs}/>
      </Container>
  }
  else {
      content = 
      <Container>
        <FavsList items={this.state.items} favorites={this.state.favorites} deleteItem={this.deleteItem}/>
      </Container>
  }
    return(
    <div className="App">
      <AppNavbar changeView={this.changeView} favorites={this.state.favorites}/>
      <div>{content}</div>
    </div>
    );
  } 
}

export default App;
