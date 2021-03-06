import * as React from 'react';  
import { Link } from 'react-router-dom'; 


class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selected : 0,
        }
    }

    updateSelected = (idx) => {
        this.setState({selected:idx});
    }


    render(){
        return(
            <div className='navbar'>  
                <Link to='/' onClick={()=>this.updateSelected(0)}>
                    <div className={`navigation-item ${this.state.selected === 0 ? 'selected' : '' }`}>  
                        <p className='navigation-text'>  
                            Meals
                        </p>  
                    </div> 
                </Link>
                 <Link to='/page2' onClick={()=>this.updateSelected(1)}>
                    <div className={`navigation-item ${this.state.selected === 1 ? 'selected' : '' }`}>  
                        <p className='navigation-text'>  
                            How To
                        </p>  
                    </div> 
                 </Link>
                 <Link to='/page3' onClick={()=>this.updateSelected(2)}>
                    <div className={`navigation-item ${this.state.selected === 2 ? 'selected' : '' }`}>  
                        <p className='navigation-text'>  
                            Page2 
                        </p>  
                    </div>  
                 </Link>
                 <Link to='/page4' onClick={()=>this.updateSelected(3)}>
                    <div className={`navigation-item ${this.state.selected === 3 ? 'selected' : '' }`}>  
                        <p className='navigation-text'>  
                            Page3
                        </p>  
                    </div>  
                 </Link>
            </div>  
        );
    }

}

export default NavBar;