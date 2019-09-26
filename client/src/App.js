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
    items:[
      {_id:3000, name: "Kerby Lane - South", food_type:"american", img_url: "https://i2.wp.com/do512family.com/wp-content/uploads/2016/09/12342638_10153761515584712_7303408884093528793_n.jpg?fit=960%2C768&", breakfast:"true", hood:"south", phone:"512-445-4451", deliveryOptions:["favor", "postmates"]},
      {_id:4000, name: "24 Diner", food_type:"american", img_url:"http://dannybatista.com/wp-content/uploads/2017/01/food-photography-austin-diner-24-3.jpg", breakfast:"true", hood:"downtown", phone:"512-472-5400",deliveryOptions:["doordash", "postmates"] },
      {_id:5000, name: "Waffle House", food_type:"american", img_url: "https://cdn0.vox-cdn.com/thumbor/ICDxIaiK1dqA8SW3OLBILe2jlWE=/0x142:2048x1214/fit-in/1200x630/cdn1.vox-cdn.com/uploads/chorus_asset/file/8445343/wafflehouse.jpg", breakfast:"true", hood:"south", phone:"512-445-4451"}, 
      {_id:6000, name: "Magnolia's Cafe - South", food_type:"american", img_url:"https://images.squarespace-cdn.com/content/v1/556f483ce4b037539dac6851/1518643061827-4HMYL6JR6V6MB80LIBR5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_9751.JPG?format=2500w", breakfast:"true", hood:"south", phone:"512-445-0000" },
      {_id:7000, name: "iHop - Downtown", food_type:"american", img_url: "https://olo-images-live.imgix.net/ed/ed7999ca623d4124b7eb6cc94e3cc33d.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=860&h=484&fit=fill&bg=%23fff&s=f1a21613ee8832ef0981d6c078533157", breakfast:"true", hood:"downtown", phone:"512-478-9520", deliveryOptions:["grubhub", "seamless","favor", "postmates"]},
      {_id:8000, name: "Star Seeds Cafe", food_type:"american", img_url: "https://d4o3oxzf7m9sj.cloudfront.net/F-1naSPpH3IFQYiIVfpwK_WauQM=/1200x630/https://media.data.statesman.com/restaurants/images/RBB_Star_Seeds_Cafe_2.JPG", breakfast:"true", hood:"downtown", phone:"512-478-9520", deliveryOptions:["postmates"]},
      ],
      myFavs:[ {_id:7000, name: "iHop - Downtown", food_type:"american", img_url: "https://olo-images-live.imgix.net/ed/ed7999ca623d4124b7eb6cc94e3cc33d.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=860&h=484&fit=fill&bg=%23fff&s=f1a21613ee8832ef0981d6c078533157", breakfast:"true", hood:"downtown", phone:"512-478-9520", deliveryOptions:["grubhub", "seamless","favor", "postmates"]},
      {_id:8000, name: "Star Seeds Cafe", food_type:"american", img_url: "https://d4o3oxzf7m9sj.cloudfront.net/F-1naSPpH3IFQYiIVfpwK_WauQM=/1200x630/https://media.data.statesman.com/restaurants/images/RBB_Star_Seeds_Cafe_2.JPG", breakfast:"true", hood:"downtown", phone:"512-478-9520", deliveryOptions:["postmates"]}],
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
