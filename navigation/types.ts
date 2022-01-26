export enum Routes {
  feed = 'feed',
  post = 'post',
}

export type RootStackParamList = {
  feed: undefined;
  post: {
    id: string;
    title: string;
  };
};
