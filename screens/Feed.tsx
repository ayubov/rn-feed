import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import { Screen, Card } from 'components';
import { RootStackParamList, Routes } from 'navigation/types';
import films, { IFilm } from '../data';

type Props = NativeStackScreenProps<RootStackParamList, Routes.feed>;

const StyledFlatList = styled.FlatList({ padding: 8 });

const Feed: React.FC<Props> = ({ navigation }) => {
  return (
    <Screen>
      <StyledFlatList
        showsVerticalScrollIndicator={false}
        data={films}
        renderItem={({ item }) => {
          const _item = item as IFilm;
          return (
            <Card
              marginTop={8}
              title={_item.fullTitle}
              subtitle1={`#${_item.rank}`}
              subtitle2={_item.crew}
              onPress={() => navigation.navigate(Routes.post, { id: _item.id, title: _item.title })}
            />
          );
        }}
      />
    </Screen>
  );
};

export default Feed;
