import React, {Component} from 'react';


class SearchBar extends Component{
    state ={
        value: ""
    }
    onInputChange(e){
        e.preventDefault();
        this.setState({value: e.target.value})
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input onChange={this.onInputChange} type="text" />
                </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;