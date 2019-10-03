import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood';
import PropTypes from 'prop-types';
import {FaRegHeart} from 'react-icons/fa';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import {addFavorite} from '../actions/favoritesActions';
import {FaTimes} from 'react-icons/fa';

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
            <Container style={{background: "transparent"}}>
                <ListGroup>
                    {items.map((i)=>{
                        return (       
                            <ListGroupItem key={i._id} style={{margin:"4px", background:"#dbe4f0"}}>
                            <Button 
                            size="sm" 
                            color="danger" 
                            className = "float-right"
                            class="rounded-2" 
                            style={{ margin: '2px'}} 
                            onClick={()=>{
                                this.onAddClick(i)}}>
                                <FaRegHeart />
                            </Button>
                            <Button 
                            size="sm" 
                            color="secondary"
                            className="float-right" 
                            style={{ margin: '2px' }}
                            onClick={()=>{
                                this.onDeleteClick(i._id)}}>
                                <FaTimes />
                            </Button> 
                            <h4 style={{color:"black", fontFamily:"Squada One, cursive"}}>{i.name}</h4>
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

 