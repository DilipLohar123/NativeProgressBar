import PropTypes from 'prop-types';
import {requireNativeComponent, ViewPropTypes} from 'react-native';
var viewProps = {
  name: 'AndroidProgressBarModule',
  propTypes: {
    progress: PropTypes.number,
    max: PropTypes.number,
  },
};
module.exports = requireNativeComponent('AndroidProgressBarModule', viewProps);
