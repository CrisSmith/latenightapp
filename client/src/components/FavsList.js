import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood'

class FavsList extends Component {
    render() {
        let {myFavs} = this.props
        let favfoodlist =  myFavs.map((i, _id)=>{
            return (
                <ListGroup>
                    <ListGroupItem key={_id}><Button className="float-right" size="sm">x</Button>{i.name}<OrderFood restaurant={i}/></ListGroupItem>
                </ListGroup> 
        );    
    })
        return (
          <Container>
                <h2>Favorites:</h2>
                <div>{favfoodlist}</div>
            </Container>
        );
    }
}

export default FavsList