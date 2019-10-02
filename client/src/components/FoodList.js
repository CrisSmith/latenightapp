import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood';
import PropTypes from 'prop-types';
import {FaRegHeart} from 'react-icons/fa';
import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions';
import {FaTimes} from 'react-icons/fa';


class FoodList extends Component {
    
    componentDidMount(){
        this.props.getItems();
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
                            onClick={(e)=>{
                                e.preventDefault();
                                this.props.addToFavs(i)}}>
                                <FaRegHeart />
                            </Button>
                            <Button 
                            size="sm" 
                            color="dark"
                            className="float-right" 
                            style={{ margin: '2px' }}
                            onClick={()=>{
                                this.onDeleteClick.bind(this, i._id)}}>
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
    item: PropTypes.object.isRequired
    //deleteItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
     item: state.item
})

export default connect(mapStateToProps, {getItems})(FoodList)

 