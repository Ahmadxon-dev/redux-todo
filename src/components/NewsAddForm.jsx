import React from 'react';

const NewsAddForm = () => {
    return (
        <form className={`border p-4 shadow-lg rounded`}>
            <div className="mb-3">
                <label htmlFor="name" className={`form-label fs-4`}>Name for new News</label>
                <input type="text" required={true} name={`name`} className={`form-control`} id={`name`} placeholder={`Title for news...`}/>
            </div>
            <div className="mb-3">
                <label htmlFor="text" className={`form-label fs-4`}>Description </label>
                <textarea type="text" required={true} name={`text`} className={`form-control`} id={`text`} style={{"height":"120px", "resize":'none'}} placeholder={`Description...`}/>
            </div>
            <div className="mb-3">
                <label htmlFor="category" className={`form-label`}>Choose category of news</label>
                <select name="category" id="category" required={true} className={`form-select`}>
                    <option >News about...</option>
                    <option value={`world`}>World News</option>
                    <option value="sport">Sport News</option>
                    <option value="hot">Hot News</option>
                </select>
            </div>
            <button type={"submit"} className={`btn w-100 btn-dark shadow-lg `}>Create Post</button>
        </form>
    );
};

export default NewsAddForm;