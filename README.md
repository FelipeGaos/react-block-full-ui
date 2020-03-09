

# React Block Full Ui

## Usage


```js


  import React from 'react';
  import BlockUi from 'react-block-full-ui'
  
  class Fancy extends React.Component {
    constructor(props){
      this.state({loading:false})
    }
    render() {
      return (
        <div>
          <BlockUi show={this.state.loading}  />
          This is so Fancy!
        </div>
      );
    }
  }
  export default Fancy;




