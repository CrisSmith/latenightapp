import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem} from 'reactstrap';
import OrderFood from './OrderFood'

class FoodList extends Component {
    render() {
        let {items} = this.props
        let foodlist =  items.map((i, _id)=>{
            return (
                    <ListGroup>
                        <ListGroupItem key={_id}>{i.name}<OrderFood restaurant={i} addToFavs={this.props.addToFavs}/></ListGroupItem>
                    </ListGroup> 
            );    
        })
        return (
            <Container>
                <h2>Food:</h2>
                <div>{foodlist}</div>
            </Container>
        )
    }
}

export default FoodList