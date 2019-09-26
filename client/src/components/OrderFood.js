import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card ,CardImg} from 'reactstrap';

class OrderFood extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false,
      };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
 
  render() {
    return (
      <div>
        <Button color="dark" size="sm" style={{ margin: '3px' }} onClick={this.toggle}>order</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ marginTop: '10px' }}>
            <CardImg  top width="100%" src={this.props.restaurant.img_url} alt="Card image cap" />
            <CardBody>
                <p>Delivery Options:</p>
                <Button size="sm" color="primary" style={{ margin: '3px' }}>Seamless</Button>
                <Button size="sm" color="primary" style={{ margin: '3px' }}>Favor</Button>
                <Button size="sm" color="primary" style={{ margin: '3px' }}>DoorDash</Button>
                <hr></hr>
                <p>Pickup: {this.props.restaurant.phone}</p>
                <hr></hr>
                <Button id="add-btn" size="sm" color="info" onClick={(e)=>{
                  e.preventDefault();
                  this.props.addToFavs(this.props.restaurant)}}>Add To Favs</Button>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default OrderFood;