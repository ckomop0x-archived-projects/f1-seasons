import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

declare let module: any;

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }
}
