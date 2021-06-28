import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class GuardedRoute extends React.Component {

    render() {
        const Component = this.props.component;
       
        return this.props.logged_in ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
      logged_in: state.logged_in,
      currentUser : state.current_user
    }
  }
  
export default connect(mapStateToProps)(GuardedRoute)