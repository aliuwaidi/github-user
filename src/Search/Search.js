import React, { Component } from 'react'

class Search extends Component {
  state={
    text:''
  };

  onChange=(e)=> {
    this.setState({ text: e.target.value })
  }


   onSubmit = (e) => {
    e.preventDefault();
     if (this.state.text === '') {
       this.props.alertMessage('Enter Something');
     }
     else {
      this.props.userSearch(this.state.text);
      this.setState({text:''})
     }
  
  }

  render() {
    const {clearState,showClearBtn} = this.props
    return (
      <div>
        <form action="" className='form' onSubmit={this.onSubmit} >
          <input
            className='form-control my-4'
            type="text"
            name='text'
            value={this.state.text}
            placeholder='Search Users...'
            onChange={this.onChange}
          />
          <input
            className="btn form-control btn-dark mb-4"
            type="submit"
            value='Search'
            
          />
        </form>
        {showClearBtn && ( <button
          onClick={clearState}
          className="btn btn-light form-control mb-4"
        >
          Clear
        </button>)}
       
      </div>
    )
  }
}

export default Search;
