import React, { FC, useState } from 'react';
import { ViewProps } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

import Skeleton from './Skeleton';

export type ImageProps = ViewProps & {
  uri: string;
  width?: string | number;
  height?: string | number;
};

const StyledView = styled.View<Pick<ImageProps, 'height' | 'width'>>(
  ({ height = '100%', width = '100%' }) => ({
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    overflow: 'hidden',
    width,
    height,
  }),
);

const StyledImage = styled(FastImage)({
  width: '100%',
  height: '100%',
});

const Image: FC<ImageProps> = ({ uri, ...rest }) => {
  const [loading, setLoading] = useState(true);

  return (
    <StyledView {...rest}>
      <StyledImage source={{ uri }} onLoad={() => setLoading(false)} resizeMode="cover" />
      <Skeleton show={loading} />
    </StyledView>
  );
};

export default Image;
