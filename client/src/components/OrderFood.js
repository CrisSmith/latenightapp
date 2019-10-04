import React, { Component } from 'react';
import { Collapse, Button, ButtonGroup, CardBody, Card ,CardImg} from 'reactstrap';


class OrderFood extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false,
      linkName:"",
      favor:"https://favordelivery.com",
      doordash:"https://www.doordash.com/food-delivery/austin-tx-restaurants/",
      postmates:"https://postmates.com",
      ubereats:"https://www.ubereats.com/en-US/austin/"
      };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  handelLink = (e) => {
    if(e.target.value === "favor"){
      return(
        this.setState({
          linkName: this.state.favor
        })
      )
    }
    else if (e.target.value === "postmates"){
      return(
        this.setState({
          linkName: this.state.postmates
        })
      )
    }
    else if (e.target.value === "ubereats"){
      return(
        this.setState({
          linkName: this.state.ubereats
        })
      )
    }
    else if (e.target.value === "doordash"){
      return(
        this.setState({
          linkName: this.state.doordash
        })
      )
    }
    else {
      this.setState({
        linkName: this.state.doordash
      })
    }
      console.log(this.state.linkName)
  }
  
  render() {
    
    let deliveryList = this.props.restaurant.delivery.map(d =>{
      return (
        <div>
            <a style={{display: "table-cell"}} href={this.state.linkName} target="_blank"><Button value={d} size="sm" color="primary" style={{ margin: '3px' }} onClick={this.handelLink}>{d}</Button></a>
        </div>
      )
    })
    return (
      <div >
        <Button size="lg" color="dark" style={{ marginTop:'4px'}} onClick={this.toggle}>order</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ marginTop: '10px', background:"#b7c9e1"}}>
            <CardImg  top width="100%" src={this.props.restaurant.img_url} alt="Card image cap" />
            <CardBody>
                <p>Delivery:</p>
                <ButtonGroup >{deliveryList}</ButtonGroup>
                <hr></hr>
                <p>Browse:<a href={this.props.restaurant.menu} target="_blank"> Menu</a></p>
                <p>Pickup: {this.props.restaurant.phone}</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default OrderFood;