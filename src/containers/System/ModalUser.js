import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader, button } from 'reactstrap';
import { emitter } from "../../utils/emitter";
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            //reset state
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }
    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleOnChageInput = (event, id) => {
        //bad code.modify state
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad stage: ', this.state)
        // })
        //goodcode
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })

    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter:' + arrInput[i]);
                break;
            }
        }
        return true;
    }
    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //call api create modal

            this.props.createNewuser(this.state);

        }
    }

    render() {
       
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className={'modal-user-container'}
                size='lg'
                centered>
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container '>
                            <label>Email</label>
                            <input type='text' onChange={(event) => { this.handleOnChageInput(event, "email") }} value={this.state.email}></input>
                        </div>
                        <div className='input-container '>
                            <label>Password</label>
                            <input type='password' onChange={(event) => { this.handleOnChageInput(event, "password") }} value={this.state.password}></input>
                        </div>
                        <div className='input-container '>
                            <label>First Name</label>
                            <input type='text' onChange={(event) => { this.handleOnChageInput(event, "firstName") }} value={this.state.firstName}></input>
                        </div>
                        <div className='input-container '>
                            <label>Last Name</label>
                            <input type='text' onChange={(event) => { this.handleOnChageInput(event, "lastName") }} value={this.state.lastName}></input>
                        </div>
                        <div className='input-container max-width-input '>
                            <label>Address</label>
                            <input type='text' onChange={(event) => { this.handleOnChageInput(event, "address") }} value={this.state.address}></input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className='btn-primary px-3' onClick={() => { this.handleAddNewUser() }}>Add new</button>{``}
                    <button className='px-3' onClick={() => { this.toggle() }}>Close</button>
                </ModalFooter>

            </Modal >
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);




