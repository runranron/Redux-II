import React, { Component } from 'react';
import { connect } from 'react-redux';

class UpdateFriendForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <input />
                </form>                
            </div>
        );
    }
}

mapDispatchToProps = () => {
    addFriend: addFriend
}


export default connect(mapDispatchToProps)(UpdateFriendForm);