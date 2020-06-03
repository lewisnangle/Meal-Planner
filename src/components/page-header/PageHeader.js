import * as React from 'react'; 
import Search from '../search/Search';

export default class MyPageHeader extends React.Component { 

    render() { 
        return ( 
            <div className='page-header'> 
                <h1 className='title'>Meal Planner</h1> 
                <div className="search">
                    <Search searchMeal={this.props.searchMeal}/>
                </div>
                
            </div> 
        ) 
    } 

}