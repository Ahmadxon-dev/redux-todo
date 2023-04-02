import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import usePost from '../hook/usePost'
import {addNew} from "../redux/actions"
import {v4} from "uuid"
const NewsAddForm = () => {
    const [name,setName] = useState("")
    const [description, setDescr] = useState("")
    const [category, setCategory] = useState('')
    const dispatch = useDispatch()
    const uuidV4 = v4()
    const {request} = usePost()

    return (
        <form className={`border p-4 shadow-lg rounded`}>
        {/*{v4()}*/}
            <div className="mb-3">
                <label htmlFor="name" className={`form-label fs-4`}>Name for new News</label>
                <input type="text" required={true} value={name} onChange={e=>setName(e.target.value)} name={`name`} className={`form-control`} id={`name`} placeholder={`Title for news...`}/>
            </div>
            <div className="mb-3">
                <label htmlFor="text" className={`form-label fs-4`}>Description </label>
                <textarea type="text" required={true} name={`text`} value={description} onChange={e=>setDescr(e.target.value)}  className={`form-control`} id={`text`} style={{"height":"120px", "resize":'none'}} placeholder={`Description...`}/>
            </div>
            <div className="mb-3">
                <label htmlFor="category" className={`form-label`}>Choose category of news</label>
                <select name="category" id="category" required={true} value={category} onChange={e=>setCategory(e.target.value)} className={`form-select`}>
                    <option></option>
                    <option value="others">Others</option>
                    <option value={`World News`}>World News</option>
                    <option value="Sport News">Sport News</option>
                    <option value="Hot News">Hot News</option>
                </select>
            </div>
            <button type={"submit"} className={`btn w-100 btn-dark shadow-lg `} onClick={(e)=>{
                e.preventDefault()
                dispatch(addNew({id:uuidV4,name,description,category}))
                request("http://localhost:3001/news", {id:uuidV4, name, description:description, category})
            }}>Create Post</button>
        </form>
    );
};

export default NewsAddForm;