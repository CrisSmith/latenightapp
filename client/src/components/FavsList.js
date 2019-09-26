import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood'

class FavsList extends Component {
    render() {
        let {foods} = this.props
        let foodlist =  foods.map((f, _id)=>{
            return (
                <ListGroup>
                    <ListGroupItem key={_id}><Button className="float-right" size="sm">x</Button>{f.name}<OrderFood restaurant={f}/></ListGroupItem>
                </ListGroup> 
        );    
    })
        return (
          <Container>
                <h2>Favorites:</h2>
                <div>{foodlist}</div>
            </Container>
        );
    }
}

export default FavsList