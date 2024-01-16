import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {
    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2024 Hello Hospital <a href='#'>Follow my fanpage</a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
