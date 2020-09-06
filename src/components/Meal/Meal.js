import React from 'react'

class Meal extends React.Component {

    state = {
        meal: ""
      };

    
    componentDidMount(){
       console.log("Meal Component has mounted.")
       const {meal} = this.props.location.state
       console.log(meal)
    }

    render(){
        return(<div>Meal</div>)
    }

}
export default Meal;