import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import { Screen, Image } from 'components';
import { RootStackParamList, Routes } from 'navigation/types';
import films from '../data';

type Props = NativeStackScreenProps<RootStackParamList, Routes.post>;

const StyledContainer = styled.View({
  overflow: 'hidden',
  marginTop: 8,
});

const StyledDetails = styled.View({
  padding: 16,
  borderRadius: 24,
  backgroundColor: '#fff',
  position: 'relative',
  bottom: 24,
});

const StyledTitle = styled.Text({
  marginBottom: 8,
  fontWeight: 'bold',
  fontSize: 16,
});

const StyledContent = styled.Text({
  paddingTop: 8,
});

const Post: React.FC<Props> = ({
  route: {
    params: { id },
  },
}) => {
  const film = films.find(v => v.id === id)!;
  return (
    <Screen paddingHorizontal={8}>
      <StyledContainer>
        <Image height={400} uri={film.image} />
        <StyledDetails>
          <StyledTitle>{film.fullTitle}</StyledTitle>
          {[
            ['Rank', film.rank],
            ['Rating IMDB', film.imDbRating],
            ['Crew', film.crew],
          ].map(([title, content]) => (
            <StyledContent key={title}>{`${title}: ${content}`}</StyledContent>
          ))}
        </StyledDetails>
      </StyledContainer>
    </Screen>
  );
};

export default Post;
