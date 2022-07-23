import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './routes/test.jsx';


function App() {
    return (
        <>
            <Test />
            <Test />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);