import React from 'react';
import { hot } from 'react-hot-loader';
import SimpleBox from './SimpleBox/SimpleBox';

const App = () => {
    return <SimpleBox />;
};

export default module.hot ? hot(App) : App;
