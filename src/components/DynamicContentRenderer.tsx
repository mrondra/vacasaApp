import {ActivityIndicator} from 'react-native-paper';
import {Text} from 'react-native';

type DynamicContentRendererProps<T> = {
  isPending: boolean;
  isError: boolean;
  data: T | undefined;
  renderContent: (data: T) => JSX.Element;
};

export const DynamicContentRenderer = <T,>({
  isPending,
  isError,
  data,
  renderContent,
}: DynamicContentRendererProps<T>) => {
  if (isPending) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>There was an error fetching the data</Text>;
  }

  if (!data) {
    return <Text>No data</Text>;
  }

  return renderContent(data);
};
