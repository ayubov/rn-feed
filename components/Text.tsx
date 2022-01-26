import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

import defaultStyles from 'config';

const Text: React.FC<TextProps> = ({ children, style, ...otherProps }) => (
  <RNText style={[defaultStyles.text, style]} {...otherProps}>
    {children}
  </RNText>
);

export default Text;
