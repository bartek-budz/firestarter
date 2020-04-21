import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export class FakeLink extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,    
  };

  render() {    
    const fakeLink = this.props.location && this.props.location.pathname
    const {children, onClick} = this.props
    return (
      <div className="common-fake-link">
        <a href={fakeLink} onClick={onClick}>{children}</a>        
      </div>
    );
  }
}

export default withRouter(props => <FakeLink {...props}/>);