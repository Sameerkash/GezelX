import React from 'react';
import {AppStore} from '../pages/AppStore';


const AppStoreContext = React.createContext<AppStore | null>(null);

export default AppStoreContext;
