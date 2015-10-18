// Passes in TodoBox from Index.jsx, and data from the server is passed in the id of initial-data
// to the element that has the id of app.
var React = require('react');
var TodoBox = require('./views/index.jsx');

var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
React.render(<TodoBox data={data} />, document.getElementById("app"));


