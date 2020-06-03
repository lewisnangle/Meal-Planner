import React from 'react';


class Search extends React.Component {

    state = {mealQuery:''};

    updateMealQuery = event => {
        this.setState({mealQuery : event.target.value});
        console.log(event.target.value);
    }

    handleKeyPress = event => {
        if (event.key === 'Enter'){
            this.searchMeal();
        }
    }

    searchMeal = () => {
        this.props.searchMeal(this.state.mealQuery);
    }

    render(){
        return(
            <div>
                <input onChange={this.updateMealQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder = 'Search for a meal'
                 />
        
                <button variant="outline-dark" onClick ={this.searchMeal}>Search</button>
            </div>
        );
    }

}


export default Search;