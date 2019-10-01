import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood';
import {FaRegHeart} from 'react-icons/fa';

class FoodList extends Component {
    render() {
        let {items} = this.props
        let foodlist =  items.map((i, _id)=>{
            return (
                        <ListGroupItem key={_id}>
                            {i.name}
                            <Button id="add-btn" size="sm" color="dark" className = "float-right" style={{ margin: '2px' }} onClick={(e)=>{
                                e.preventDefault();
                                this.props.addToFavs(i)}}><FaRegHeart /></Button>
                                <OrderFood restaurant={i}/>
                        </ListGroupItem>
            );    
        })
        return (
            <Container>
                <h2>Food:</h2>
                <ListGroup>{foodlist}</ListGroup>
            </Container>
        )
    }
}

export default FoodList