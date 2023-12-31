// @flow
import _ from 'lodash';
import React from 'react';
import ReactGA from 'react-ga';

import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { getInTouchRequest } from '../../../actions/GeneralActions';
import Util from '../../../services/Util';
import WebContactSecView from './WebContactSecView';
import {
  IS_REQUIRED_ERROR,
  INVALID_PHONE_ERROR,
  INVALID_EMAIL_ERROR,
  INVALID_NAME_ERROR,
  INVALID_WEBSITE_ERROR
} from '../../../constants';

class WebContactSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    name: '',
    nameError: '',
    phoneNumber: '',
    phoneNumberError: '',
    businessEmail: '',
    businessEmailError: '',
    companyName: '',
    companyNameError: '',
    industry: '',
    industryError: '',
    volume: '',
    volumeError: '',
    hearAbout: '',
    hearAboutError: '',
    isLoading: false,
    successStatus: false,
    successMsg: '',
    web: '',
    webError: ''
  };

  change = e => {
    let temp = {};
    temp[[e.target.name] + 'Error'] = '';

    this.setState({
      [e.target.name]: e.target.value,

      ...temp
    });
  };

  flush_alert = () => {
    this.setState((prevState, props) => ({
      successStatus: !prevState
    }));
  };

  validateForm = () => {
    let isError = false;
    const errors = {
      nameError: '',
      phoneNumberError: '',
      businessEmailError: '',
      companyNameError: '',
      industryError: '',
      volumeError: '',
      hearAboutError: '',
      webError: ''
    };

    if (_.isEmpty(this.state.name)) {
      isError = true;
      errors.nameError = IS_REQUIRED_ERROR;
    }
    if (!Util.isValidName(this.state.name)) {
      isError = true;
      errors.nameError = INVALID_NAME_ERROR;
    }
    if (!Util.isValidUKMobileNumber(this.state.phoneNumber)) {
      isError = true;
      errors.phoneNumberError = INVALID_PHONE_ERROR;
    }
    if (!Util.isEmailValid(this.state.businessEmail)) {
      isError = true;
      errors.businessEmailError = INVALID_EMAIL_ERROR;
    }
    if (_.isEmpty(this.state.companyName)) {
      isError = true;
      errors.companyNameError = IS_REQUIRED_ERROR;
    }
    if (_.isEmpty(this.state.web)) {
      isError = true;
      errors.webError = IS_REQUIRED_ERROR;
    }
    if (!Util.isValidURL(this.state.web)) {
      isError = true;
      errors.webError = INVALID_WEBSITE_ERROR;
    }
    if (_.isEmpty(this.state.industry)) {
      isError = true;
      errors.industryError = IS_REQUIRED_ERROR;
    }
    if (_.isEmpty(this.state.volume)) {
      isError = true;
      errors.volumeError = IS_REQUIRED_ERROR;
    }
    if (_.isEmpty(this.state.hearAbout)) {
      isError = true;
      errors.hearAboutError = IS_REQUIRED_ERROR;
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = () => {
    if (!this.validateForm()) {
      // e.preventDefault();
      // TODO make request to server
      // Google analytics
      ReactGA.event({
        category: 'jumpstart',
        action: 'submit',
        label: 'success'
      });

      const {
        name,
        phoneNumber,
        businessEmail,
        companyName,
        volume,
        industry,
        hearAbout,
        web
      } = this.state;

      const payload = {
        name,
        number: phoneNumber,
        email: businessEmail.trim(),
        company: companyName,
        volume,
        business_website: web.trim(),
        industry,
        budget: 'NA',
        message: hearAbout
      };
      this.setState({
        isLoading: true
      });
      this.props.getInTouchRequest(payload, success => {
        this.setState({
          isLoading: false
        });
        if (success) {
          this.setState({
            successStatus: true,
            successMsg:
              "We've received your query and we will contact you soon",
            name: '',
            phoneNumber: '',
            businessEmail: '',
            companyName: '',
            area: '',
            volume: '',
            hearAbout: '',
            web: ''
          });
          setTimeout(() => {
            this.flush_alert();
          }, 5000);
        }
      });
    }
  };
  render() {
    const {
      name,
      nameError,
      phoneNumber,
      phoneNumberError,
      businessEmail,
      businessEmailError,
      companyName,
      companyNameError,
      area,
      industryError,
      volume,
      volumeError,
      hearAbout,
      hearAboutError,
      successStatus,
      successMsg,
      isLoading,
      web,
      webError
    } = this.state;
    return (
      <WebContactSecView
        {...this.props}
        onSubmit={this.onSubmit}
        onInputChange={this.change}
        name={name}
        nameError={nameError}
        phoneNumber={phoneNumber}
        phoneNumberError={phoneNumberError}
        businessEmail={businessEmail}
        businessEmailError={businessEmailError}
        companyName={companyName}
        companyNameError={companyNameError}
        area={area}
        industryError={industryError}
        volume={volume}
        volumeError={volumeError}
        hearAbout={hearAbout}
        hearAboutError={hearAboutError}
        successMsg={successMsg}
        successStatus={successStatus}
        isLoading={isLoading}
        web={web}
        webError={webError}
        flush_alert={this.flush_alert}
      />
    );
  }
}

const mapStateToProps = ({ booking }) => ({
  booking
});

const actions = { getInTouchRequest };

export default connect(
  mapStateToProps,
  actions
)(withTranslate(WebContactSecController));
