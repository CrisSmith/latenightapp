import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood';
import {FaTimes} from 'react-icons/fa';

class FavsList extends Component {
    render() {
        let {myFavs} = this.props
        let favfoodlist =  myFavs.map((i, _id)=>{
            return (
                    <ListGroupItem key={_id} >
                    {i.name}
                    <Button className="float-right" size="sm" color="dark" style={{ margin: '2px' }}><FaTimes /></Button>
                    <OrderFood restaurant={i} />
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