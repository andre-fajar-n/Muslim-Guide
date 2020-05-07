import React from 'react'
import { bindActionCreators } from 'redux'
import { getLocation, showPosition } from '../store/action/locationAction'
import { connect } from 'react-redux'

class Test extends React.Component {
    componentDidMount(){
        console.log(this.props.userLatitude + this.props.userLongitude)
    } 
    render() {
        return(
            <React.Fragment>
                <div id="here">

                </div>
                <button onClick={() =>
                    this.props.showPosition()
                } >Click Me</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.location)
    return {
        userLatitude : state.location.userlatitude,
        userLongitude : state.location.userlongitude
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showPosition: bindActionCreators(showPosition, dispatch),
    };
  };

// const mapDispatchToProps = {
//     getLocation : getLocation,
//     showPosition : showPosition
// }

export default connect(mapStateToProps, mapDispatchToProps)(Test);