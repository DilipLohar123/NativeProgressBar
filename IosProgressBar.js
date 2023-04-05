import PropTypes from 'prop-types';
import {requireNativeComponent, ViewPropTypes} from 'react-native';
var viewProps = {
  name: 'RNIOSProgressBar',
  propTypes: {
    progress: PropTypes.number,
    progressTintColor: PropTypes.string,
    trackTintColor: PropTypes.string,
  },
};
module.exports = requireNativeComponent('RNIOSProgressBar', viewProps);
