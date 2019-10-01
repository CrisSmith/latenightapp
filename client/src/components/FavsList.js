import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood';
import {FaTimes} from 'react-icons/fa';

class FavsList extends Component {
    render() {
        let {favorites} = this.props
        let favfoodlist =  favorites.map((item, _id)=>{
            return (
                    <ListGroupItem key={_id} >
                    {item.name}
                    <Button 
                        className="float-right" 
                        size="sm" 
                        color="dark" 
                        style={{ margin: '2px' }}
                        onClick={()=>{
                            this.props.deleteItem(item._id)
                        }}>
                        <FaTimes /></Button>
                    <OrderFood restaurant={item} />
                    </ListGroupItem> 
            );    
        })
        return (
          <Container>
                <h2>Favorites:</h2>
                <ListGroup>{favfoodlist}</ListGroup>
            </Container>
        );
    }
}

export default FavsList