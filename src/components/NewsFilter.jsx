import React from 'react';

const NewsFilter = () => {
    return (
        <div className={`card shadow-lg mt-4`}>
            <div className="card-body">
                <p className="card-text">Filter by Categories</p>
                <div className="btn-group">
                    <button className={`btn btn-dark`}>All</button>
                    <button className={`btn btn-primary`}>Sport News</button>
                    <button className={`btn btn-success`}>World News</button>
                    <button className={`btn btn-danger`}>Hot News</button>
                </div>
            </div>
        </div>
    );
};

export default NewsFilter;