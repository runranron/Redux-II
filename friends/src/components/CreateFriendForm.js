import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/friendsActions';

class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            age:'',
            email:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ 
        [event.target.name]: event.target.value })
      }

    handleSubmit() {
        this.props.addFriend(this.state);
        this.setState({
            name:'',
            age:'',
            email:''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" placeholder="Name" onChange ={this.handleChange}/>
                    <input name="age" placeholder="Age" onChange ={this.handleChange}/>
                    <input name="email" placeholder="Email" onChange ={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { addFriend })(CreateFriendForm);