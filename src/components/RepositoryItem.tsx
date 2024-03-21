import {List} from 'react-native-paper';
import {memo} from 'react';
import {RepositoriesItem} from '../requests/types/github.ts';

type RepositoryItemProps = {
  repository: RepositoriesItem;
};

const _RepositoryItem = ({
  repository: {name, description},
}: RepositoryItemProps) => {
  return <List.Item title={name} description={description} />;
};

export const RepositoryItem = memo(_RepositoryItem);
