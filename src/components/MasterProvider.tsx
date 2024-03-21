import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PaperProvider} from 'react-native-paper';
import {PropsWithChildren} from 'react';

const queryClient = new QueryClient();

export const MasterProvider = ({children}: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>{children}</PaperProvider>
    </QueryClientProvider>
  );
};
