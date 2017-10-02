import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term : 'cats' };
  }

  render(){
    return (
      <div>
        <input
          className="form-control"
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search..."
        />
      </div>
    )
  }

  onInputChange(term){
    this.setState({term: term+' cats'});
    this.props.onSearchTermChange(this.state.term);
  }
}
