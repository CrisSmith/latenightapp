import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood';
import PropTypes from 'prop-types';
import {FaRegHeart} from 'react-icons/fa';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import {addFavorite} from '../actions/favoritesActions';
import {FaTimes} from 'react-icons/fa';
//note deleteClick doesnt work correctly because the Itaem modal is adding items with the same _id - and thus it filters out these _id (they need to be unique or all the added items will get deleted); should be fixed w addition of routes and mongo db

class FoodList extends Component {
    
    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick = (_id) => {
        this.props.deleteItem(_id)
    }
    onAddClick=(item)=>{
        this.props.addFavorite(item);
    }
    render() {
        const {items} = this.props.item;
        
        return (
            <Container>
                <ListGroup>
                    {items.map((i)=>{
                        return (       
                            <ListGroupItem key={i._id}>
                            <Button 
                            size="sm" 
                            color="dark" 
                            className = "float-right" 
                            style={{ margin: '2px' }} 
                            onClick={()=>{
                                this.onAddClick(i)}}>
                                <FaRegHeart />
                            </Button>
                            <Button 
                            size="sm" 
                            color="dark"
                            className="float-right" 
                            style={{ margin: '2px' }}
                            onClick={()=>{
                                this.onDeleteClick(i._id)}}>
                                <FaTimes />
                            </Button> 
                            {i.name}
                            <OrderFood restaurant={i}/>
                        </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </Container>    
        )
    }
}

FoodList.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    addFavorite: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
     item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem, addFavorite})(FoodList)

 