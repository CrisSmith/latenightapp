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
    myFavs:[],
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
      this.state.myFavs.push(item);
      return {myFavs:this.state.myFavs}
  })
  alert("Added to Favorites")
}
  render(){
    let content= null;
    if(this.state.whatToShow === 1){
      content =  
      <FoodList items={this.state.items} changeView={this.changeView} addToFavs={this.addToFavs}/>
  }
  else {
      content = 
      <Container>
        <ItemModal />
        <FavsList items={this.state.items} myFavs={this.state.myFavs}/>
      </Container>
  }
    return(
    <div className="App">
      <AppNavbar changeView={this.changeView} myFavs={this.state.myFavs}/>
      <div>{content}</div>
    </div>
    );
  } 
}

export default App;
