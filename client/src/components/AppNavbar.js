import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container} from 'reactstrap';
import {FaRegHeart} from 'react-icons/fa';
import {FaRocketchat} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class AppNavbar extends Component {
    constructor(props){
        super(props);
        this.state ={
            isOpen: false
        }
    }
    
    toggleNavbar=()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        let  {favorites} = this.props.favorites
        return (
            <div>
                <Navbar style={{opacity:'.7'}} color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand style={{color:"white"}}>Austin All Nighter</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse  isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <NavLink style={{color:"white"}} href="#" onClick={(e)=>{e.preventDefault();
                                        this.props.changeView(1)}}>Food</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color:"white"}} href="#" onClick={(e)=>{
                                    e.preventDefault();
                                    this.props.changeView(2)}}><FaRegHeart />'s  ({favorites.length})</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color:"white"}} href="https://github.com/CrisSmith" target="_blank">GitHub</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color:"white"}} href="https://www.linkedin.com/in/cris-smith-696b21191" target="_blank"><FaLinkedinIn /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color:"white"}} href="#" target="_blank"><FaRocketchat /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color:"white"}} href="#" target="_blank">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

AppNavbar.propTypes = {
    favorites: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    favorites: state.favorites
})

export default connect(mapStateToProps)(AppNavbar)

//export default AppNavbar;