import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <p>Hello, {(this.props.current_user[0].username)}!</p>
            </div> 
        )
    }
}


const mapStateToProps = (state) => {
    return {
        current_user: state.current_user
    }
}

export default connect(mapStateToProps)(Home)
// connect -> function(). connect(mapsStateToProps, mapDispatchToProps)(component)
