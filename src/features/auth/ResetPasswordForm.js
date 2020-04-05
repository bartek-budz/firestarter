import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { withTranslation } from 'react-i18next';
import {Button, Form } from 'react-bootstrap';

export class ResetPasswordForm extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { email } = this.props.auth // todo: on email change update global state

    const t = key => this.props.t('auth:resetPasswordForm.'.concat(key))

    return (
      <div className="auth-reset-password-form">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('email.label')}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t('email.placeholder')}
              defaultValue={email}
              required />
            <Form.Text className="text-muted">
              {t('email.description')}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            {t('resetPassword')}
          </Button>
        </Form>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ResetPasswordForm));