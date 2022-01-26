import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

import Skeleton from './Skeleton';
import Text from './Text';

type CardProps = {
  title: string;
  subtitle1: string;
  subtitle2: string;
  onPress: () => void;
  loading?: boolean;
  marginTop?: number;
};

const StyledCardContainer = styled.View<Pick<CardProps, 'marginTop'>>(({ marginTop = 0 }) => ({
  borderRadius: 16,
  padding: 16,
  backgroundColor: '#fff',
  overflow: 'hidden',
  marginTop,
}));

const StyledTitle = styled(Text)({
  fontWeight: 'bold',
});

const StyledSubtitle1 = styled(Text)({
  fontSize: 14,
  marginTop: 8,
  color: 'rgba(34, 37, 41, 0.8)',
});

const StyledSubtitle2 = styled(Text)({
  fontSize: 16,
  marginTop: 8,
});

const Card: React.FC<CardProps> = ({
  title,
  subtitle1,
  subtitle2,
  onPress,
  loading,
  marginTop,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <StyledCardContainer marginTop={marginTop}>
        <StyledTitle numberOfLines={1}>{title}</StyledTitle>
        <StyledSubtitle1>{subtitle1}</StyledSubtitle1>
        <StyledSubtitle2 numberOfLines={2}>{subtitle2}</StyledSubtitle2>
        <Skeleton show={!!loading} />
      </StyledCardContainer>
    </TouchableWithoutFeedback>
  );
};

export default Card;
