import {FlatList, ListRenderItem, Text} from 'react-native';
import {Divider} from 'react-native-paper';
import {RepositoriesItem} from '../requests/types/github.ts';
import {RepositoryItem} from './RepositoryItem.tsx';

type RepositoriesListProps = {
  data: RepositoriesItem[];
};

const keyExtractor = (item: RepositoriesItem) => String(item.id);

export const RepositoriesList = ({data}: RepositoriesListProps) => {
  const renderItem: ListRenderItem<RepositoriesItem> = ({item}) => {
    return <RepositoryItem repository={item} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={<Text>No data</Text>}
      ItemSeparatorComponent={Divider}
      keyExtractor={keyExtractor}
    />
  );
};
