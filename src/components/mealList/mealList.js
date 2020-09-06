import React from 'react';



class mealList extends React.Component {


    render(){

        if (this.props.mealList.length === 0){
            return null;
        } else {
          //  console.log('this.props',this.props);
        }

        const mealList = this.props.mealList;

      //  console.log("meal List:" + mealList);

        return(
            <div>
            {
            mealList.map((item,index)=>{
                console.log(item);
                return(
                    <table key={item.idMeal} className="ui striped table page-content">
                        {(index === 0) ? <thead>
                            <tr>
                            <th>Meal</th>
                            <th>Category</th>
                            <th>Area</th>
                            <th>Intructions</th>

                            </tr>
                        </thead> : ''  }                        
                        {
                        <tbody>
                            <tr>
                            <td>{item.strMeal}</td>
                            <td>{item.strCategory}</td>
                            <td>{item.strArea}</td>
                            <td>{item.strInstructions}</td>

                            </tr>
                        </tbody>
                        }
                        </table>
                );
            })
            }
            </div>
        );
    }



}


export default mealList;