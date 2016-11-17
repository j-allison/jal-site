import React from 'react';

import {Helpers} from 'react-scroll';

var Section = React.createClass({
  render: function () {
    return React.createElement(this.props.htmlTag || 'section', this.props, this.props.children);
  }
});

module.exports = Helpers.Element(Section);