//The "Form" component
import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Input, Label, Form, FormGroup} from 'reactstrap';
//import {connect} from 'react-redux';
//import {createItem} from '../actions/index'


class ItemModal extends Component {
    state={
        modalOpen: false,
        name:''
    }
    handelToggle=()=>{
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        let newItem ={
            name: this.state.name
        }
        this.props.addToItems(newItem);
        this.handelToggle();
    }
    render() {
        return (
            <div>
                <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.handelToggle}>Add this joint....</Button>
                <Modal toggle={this.handelToggle} isOpen={this.state.modalOpen}>
                    <ModalHeader toggle={this.handelToggle}>Adding this place before I forget...</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Name:</Label>
                                <Input type="text" name="name" id="item" onChange={this.onChange}></Input>
                                <Button style={{marginTop:"10px"}} color="dark" block>Add Restaurant</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
//function mapStateToProps(state) {
  //  return {
   //     item: state.currentItems
  //  }
//}
//export default connect(mapStateToProps,{createItem})(ItemModal)

export default ItemModal