import React from 'react';
import {MasterProvider} from './src/components/MasterProvider.tsx';
import {RootNavigation} from './src/navigation/RootNavigation.tsx';

function App(): React.JSX.Element {
  return (
    <MasterProvider>
      <RootNavigation />
    </MasterProvider>
  );
}

export default App;
