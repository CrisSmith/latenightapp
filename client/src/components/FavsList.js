import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood';
import {FaTimes} from 'react-icons/fa';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFavorites, deleteFavorite} from '../actions/favoritesActions';
import store from '../store'


class FavsList extends Component { 
    /*state ={
    favorites:[
        {_id:67, name: "Favorite 1"},
        {_id:777, name:"Fav 2"},
        {_id:877, name:"Fav 3"}
        ]
    }
    */
    componentDidMount(){
        this.props.getFavorites();
    }
    onDeleteClick = (_id) => {
        this.props.deleteFavorite(_id)
    }

    render() {
        const {favorites} = this.props.favorites
            return (
                <Container>
                <ListGroup>
                    {favorites.map((i)=>{
                        return (
                            <ListGroupItem key={i._id}>
                        {i.name}
                        <Button 
                        className="float-right" 
                        size="sm" 
                        color="dark" 
                        style={{ margin: '2px' }}
                        onClick={()=>{
                            this.onDeleteClick.bind(this, i._id)
                        }}>
                        <FaTimes /></Button>
                    <OrderFood restaurant={i} />
                    </ListGroupItem> 
                )    
            })}
            </ListGroup>
        </Container>
        )
    }
}
FavsList.propTypes = {
    getFavorites: PropTypes.func.isRequired, 
    favorites: PropTypes.object.isRequired
    //deleteItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
     favorites: state.favorites
})

export default connect(mapStateToProps, {getFavorites})(FavsList)