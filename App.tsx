import RepositoryContext from './src/Context/RepositoryContext';
import * as repository from './src/Service/Repository';
import React from 'react';
import AppStoreContext from './src/Context/AppStoreContext';
import {store} from './src/pages/AppStore';
import AppView from './src/pages/AppView';

function App() {
  return (
    <RepositoryContext.Provider value={repository}>
      <AppStoreContext.Provider value={store}>
        <AppView />
      </AppStoreContext.Provider>
    </RepositoryContext.Provider>
  );
}

export default App;
