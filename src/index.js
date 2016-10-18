//create new component. This should produce some html

//Take component's HTML and put it on page (in the DOM)
require('dotvenv').config();
var React = require('react');
var ReactDOM = require('react-dom');

const API_KEY = API_KEY_YOUTUBE;

const App = function() {
  return <div> HI! </div>
}

ReactDOM.render(<App />, document.querySelector('.container'));
