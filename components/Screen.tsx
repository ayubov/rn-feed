import React from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type ScreenProps = SafeAreaViewProps & {
  children: React.ReactNode;
  paddingHorizontal?: string | number;
};

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
});

const StyledView = styled.View<Pick<ScreenProps, 'paddingHorizontal'>>(
  ({ paddingHorizontal = 0 }) => ({ flex: 1, paddingHorizontal }),
);

const Screen: React.FC<ScreenProps> = ({ children, paddingHorizontal, ...rest }) => {
  return (
    <StyledSafeAreaView edges={['right', 'left']} {...rest}>
      <StyledView paddingHorizontal={paddingHorizontal}>{children}</StyledView>
    </StyledSafeAreaView>
  );
};

export default Screen;
