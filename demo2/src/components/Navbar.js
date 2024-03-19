import React, { useState } from "react";

function Navbar() {
    const [inputValue, setInputValue] = useState("Faith");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
        <div>
            <input placeholder="Enter name..." onChange={onChange} />
            {inputValue}
        </div>
    );
}

export default Navbar;
