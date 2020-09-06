import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button'
import Meal from '../Meal/Meal.js'
import { Link } from 'react-router-dom'; 




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      
    },
    gridList: {
      width: 1100,
      height: 1100,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  
export default function MealGrid(props) {

    const classes = useStyles();

    if (props.mealList.length === 0){
      return null;
    } else {
       // console.log('props from above...',props);
    }
    const tileData = props.mealList;


    
  //  console.log("meal List in meal grid:" + JSON.stringify(tileData));

    return (
        <div className="page-content {classes.root}" >
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto',width:'100%' }}>
          <ListSubheader component="div">Meals</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.strMealThumb}>
            <img src={tile.strMealThumb} alt={tile.strMeal} />
            <GridListTileBar
              title={tile.strMeal}
              subtitle={<span>by: {tile.strArea}</span>}
              actionIcon={
                <Link to ={{
                  pathname:'/meal',
                  state:{meal:tile.strMeal}
                          }}>

                          
                
                  <Button aria-label={`info about ${tile.strMeal}`} variant="contained" color="primary">
                    recipe
                  </Button>
                
                </Link>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    );


}


