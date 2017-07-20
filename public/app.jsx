var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'MasterKai';
var message = "this message is from kai";


ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);
