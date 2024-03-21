import {View} from 'react-native';
import {useRepositories} from '../requests/useRepositories.ts';
import {RepositoriesItem} from '../requests/types/github.ts';
import {DynamicContentRenderer} from '../components/DynamicContentRenderer.tsx';
import {RepositoriesList} from '../components/RepositoriesList.tsx';

export const HomeScreen = () => {
  const {data, isPending, isError} = useRepositories();

  const renderContent = (passedData: RepositoriesItem[]) => (
    <RepositoriesList data={passedData} />
  );

  return (
    <View style={{flex: 1}}>
      <DynamicContentRenderer
        isPending={isPending}
        isError={isError}
        data={data?.data.items}
        renderContent={renderContent}
      />
    </View>
  );
};
