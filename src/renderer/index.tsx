import React from '../../web_modules/react.js';
import ReactDOM from '../../web_modules/react-dom.js';

const App = () => {
    console.log('app')
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
