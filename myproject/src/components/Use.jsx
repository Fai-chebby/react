const React = require('react');
const { useState } = require('react');

const Use = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        React.createElement('div', null,
            counter,
            React.createElement('button', { onClick: increment }, 'Increment')
        )
    );
};

module.exports = Use;
