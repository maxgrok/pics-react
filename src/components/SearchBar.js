import React, {Component} from 'react';


class SearchBar extends Component{
    state ={
        value: ""
    }
    
    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input onChange={(e)=>this.setState({value: e.target.value})} type="text" />
                </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;