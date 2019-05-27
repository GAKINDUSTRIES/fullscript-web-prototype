import React, { memo } from 'react';
import { func, string, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from 'react-intl';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import { validations, login } from 'utils/constraints';

const messages = defineMessages({
  email: { id: 'login.form.email' },
  password: { id: 'login.form.password' }
});

export const LoginForm = ({ handleSubmit, error, submitting, intl }) => (
  <form onSubmit={handleSubmit}>
    {error && <strong>{error}</strong>}
    <div className="input-wrapper">
      <Field
        name="email"
        label={intl.formatMessage(messages.email)}
        component={Input}
        type="email"
      />
    </div>
    <div className="input-wrapper">
      <Field
        name="password"
        label={intl.formatMessage(messages.password)}
        component={Input}
        type="password"
      />
    </div>
    <button className="button-primary" type="submit">
      <FormattedMessage id="login.form.submit" />
    </button>
    {submitting && <Loading />}
  </form>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  intl: intlShape.isRequired,
  submitting: bool.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: validations(login, { fullMessages: false })
})(injectIntl(memo(LoginForm)));
