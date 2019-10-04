import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


class Contact extends Component {
    render() {
        return (
            <ListGroup style={{fontSize: "20px", fontFamily:"Squada One, cursive"}}>
                <ListGroupItem style={{margin:"4px", background:"#dbe4f0"}}>comments: <a style={{textDecoration:"none"}} type="email" href="#" target="_blank">info@allnighter.com</a></ListGroupItem>
                <ListGroupItem style={{margin:"4px", background:"#dbe4f0"}}>support: <a style={{textDecoration:"none"}} type="email" href="#" target="_blank">support@allnighter.com</a></ListGroupItem>
                <ListGroupItem style={{margin:"4px", background:"#dbe4f0"}}>careers: <a style={{textDecoration:"none"}} type="email" href="#" target="_blank">careers@allnighter.com</a></ListGroupItem>
            </ListGroup>
        )
    }
}
export default Contact