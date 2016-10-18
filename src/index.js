//create new component. This should produce some html

//Take component's HTML and put it on page (in the DOM)

var React = require('react');
var ReactDOM = require('react-dom');

const App = function() {
  return <div> HI! </div>
}

ReactDOM.render(<App />, document.querySelector('.container'));
