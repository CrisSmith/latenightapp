import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem} from 'reactstrap';
import OrderFood from './OrderFood'

class FoodList extends Component {
    render() {
        let {foods} = this.props
        let foodlist =  foods.map((f)=>{
            return (
                    <ListGroup>
                        <ListGroupItem>{f.name}<OrderFood restaurant={f}/></ListGroupItem>
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