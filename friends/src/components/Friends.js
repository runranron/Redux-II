import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../actions/friendsActions';
import axios from 'axios';
import './Friends.css';
import { Col, Row } from 'reactstrap';

class Friends extends Component {
    handleClick = (friend) => {
        axios.delete(`http://localhost:5000/api/friends/${friend.id}`, {
            id: friend.id,
        })
        
        setTimeout(() => {
            this.props.getFriends();
        }, 20);        
    }

    render() {
        return (
            <div>
                <h1>Friends</h1>
                <Row>
                {this.props.friends.map(friend => {
                    return (
                        <Col key={friend.id}>
                                <p>{friend.name}</p>
                                <button onClick={() => this.handleClick(friend)}>
                                    Delete
                                </button>
                        </Col>
                    )
                })}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}


export default connect(mapStateToProps, { getFriends, deleteFriend })(Friends);