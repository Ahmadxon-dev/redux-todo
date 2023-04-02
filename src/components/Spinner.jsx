import React from 'react';

const Spinner = () => {
    return (
        <div className={`spinner-border mx-left mt-5`}>
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Spinner;