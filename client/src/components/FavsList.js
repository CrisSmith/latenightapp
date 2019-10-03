import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import OrderFood from './OrderFood';
import {FaTimes} from 'react-icons/fa';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFavorites, deleteFavorite} from '../actions/favoritesActions';


class FavsList extends Component { 
   
    componentDidMount(){
        this.props.getFavorites();
    }
    onDeleteClick = (_id) => {
        this.props.deleteFavorite(_id)
    }

    render() {
        const {favorites} = this.props.favorites
            return (
                <Container style={{background: "transparent"}}>
                <ListGroup>
                    {favorites.map((i)=>{
                        return (
                            <ListGroupItem key={i._id} style={{margin:"4px", background:"#dbe4f0"}}>
                        <Button 
                        className="float-right" 
                        size="sm" 
                        color="secondary" 
                        style={{margin:'2px'}}
                        onClick={()=>{
                            this.onDeleteClick(i._id)
                        }}>
                        <FaTimes /></Button>
                        <h4 style={{color:"black", fontFamily:"Squada One, cursive"}}>{i.name}</h4>
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
    deleteFavorite: PropTypes.func.isRequired, 
    favorites: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
     favorites: state.favorites
})

export default connect(mapStateToProps, {getFavorites, deleteFavorite})(FavsList)