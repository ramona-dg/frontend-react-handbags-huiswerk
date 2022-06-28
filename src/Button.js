import React from "react";

function Button({isDisabled, clickHandler, description}) {
    return (
        <button
            type="button"
            disabled={isDisabled}
            onClick={clickHandler}
        >
            {description}
        </button>
    );
}

// ergens moet nog iets voor de disabled pre-order
export default Button;