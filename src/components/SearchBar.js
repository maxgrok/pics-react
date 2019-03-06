import React, {Component} from 'react';


class SearchBar extends Component{
    state ={
        term: ""
    }
    
    onFormSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={e => this.onFormSubmit(e)} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input onChange={(e)=>this.setState({term: e.target.value})} value={this.state.term} type="text" />
                </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;