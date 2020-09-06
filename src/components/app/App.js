import * as React from 'react';  
import PageHeader from '../page-header/PageHeader';  
import Navbar from '../navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import MealList from '../mealList/mealList';
import MealGrid from '../mealGrid/MealGrid';
import Meal from '../Meal/Meal';


class App extends React.Component {  

    state = {mealList:[]};

    searchMeal = meal => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+meal)
        .then(response => 
            response.json())
        .then((myJson) => {
            console.log(myJson)
            //var json = JSON.parse(myJson);
            var json = myJson;
          //  console.log(json.meals);
            var mealList = []
            for(var i = 0; i < json.meals.length;i++){
                var id = json.meals[i].idMeal;
                var strMeal = json.meals[i].strMeal;
                var strCategory = json.meals[i].strCategory;
                var strArea = json.meals[i].strArea;
                var strInstructions = json.meals[i].strInstructions;
                var strMealThumb = json.meals[i].strMealThumb;
                var mealItem = {id,strMeal,strCategory,strArea,strInstructions,strMealThumb}
                mealList.push(mealItem)
            }
            this.setState({mealList})
        });
    }

    componentDidMount(){
        const foods = ["chicken","beef"];
        this.searchMeal(foods[Math.floor(Math.random() * foods.length)]);//get random food item from foods
    }

    render() {  
        return (  
            <div>  
                
                <PageHeader searchMeal={this.searchMeal}/>
                <Router> 
                <Navbar/>
                <Switch>  
                    <Route path="/page2">  
                        <MealList searchMeal={this.searchMeal} mealList = {this.state.mealList} />   
                    </Route>  
                    <Route path="/page3">  
                        <div className='page-content'>Page 3</div>  
                    </Route>  
                    <Route path="/page4">  
                        <div className='page-content'>Page 4</div>  
                    </Route>  
                    <Route path="/meal">  
                        <div className='page-content'><Meal className='page-content'></Meal></div>  
                    </Route>  
                    <Route path="/">  
                        <MealGrid mealList={this.state.mealList} className='page-content'/>
                    </Route>  
                </Switch>  
            </Router> 
            </div>  
        )  
    }   

} 

export default App;