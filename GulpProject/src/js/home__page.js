'use strict';

const element = <p>Hello, world!</p>;
 ReactDOM.render(element, document.getElementById('home'));

 class Test extends React.Component {
    render() {
      return <h1>Hello World2!</h1>;
    }
  }
  
  ReactDOM.render(<Test />, document.getElementById('home'));