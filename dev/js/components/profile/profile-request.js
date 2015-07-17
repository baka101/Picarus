var React = require('react');
var Link = require('react-router').Link;

var ProfileRequest = React.createClass({
  render: function(){
    if (!this.props.data) {
      return (<div></div>);
    }
    else return (
      <div>
        <Link to="requests" params={{requestId: this.props.data.id}} >{this.props.data.text}</Link>
      </div>
    );
  }
});

module.exports = ProfileRequest;
