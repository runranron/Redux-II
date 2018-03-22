import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';
import { getFriends } from './actions/friendsActions';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    console.log(this.props.friends);
    return (
      <Container>
        <Row>
          <Friends className="FriendsContainer" friends={this.props.friends}/>
        </Row>
        <CreateFriendForm className="CreateFriend"/>
      </Container>
    );
  }

  componentDidMount() {
    this.props.getFriends();
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { getFriends })(App);
