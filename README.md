

# React Block Full Ui

## Usage


```js


  import React from 'react';
  class Fancy extends React.Component {
    constructor(props){
      this.state({loading:false})
    }
    render() {
      return (
        <div>
          <Loading show={this.state.loading}  />
          This is so Fancy!
        </div>
      );
    }
  }
  export default Fancy;




