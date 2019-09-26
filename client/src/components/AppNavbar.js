//this component will have a collapsable 'hamburger' menu containing links
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
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand style={{color:"white"}}>Austin All Nighter</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse  isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <NavLink  href="#" onClick={(e)=>{e.preventDefault();
                                        this.props.changeView(1)}}>Food</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" onClick={(e)=>{
                                    e.preventDefault();
                                    this.props.changeView(2)}} >My Favs ({this.props.myFavs.length})</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">GitHub</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default AppNavbar;