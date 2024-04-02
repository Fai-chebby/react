import React, { useState } from "react";

function Navbar() {
    const [inputValue, setInputValue] = useState("Faith");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
        <div>
            <div>
            <input placeholder="Enter name..." onChange={onChange} />
            {inputValue}
            </div>
            <div>
                <h1> A bank card is all what we need, but we forget that what is inside is what is the most valuable</h1>
            </div>
        </div>

    );
}

export default Navbar;
