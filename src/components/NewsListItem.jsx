import React from 'react';
import news from "../assets/news.png"
import {useDispatch} from "react-redux";
import {newsDelete} from "../redux/actions";
import useDelete from "../hook/useDelete";
const NewsListItem = ({id,name,description, category}) => {
    const dispatch = useDispatch()
    let elementclassName;
    const {request} = useDelete()
    const deleteHandler = (id)=>{
        dispatch(newsDelete(id))
        request("http://localhost:3001",id)
    }
    switch (category) {
        case "Hot News":
            elementclassName='bg-danger bg-gradient';
            break
        case "Sport News":
            elementclassName='bg-primary bg-gradient'
            break
        case "World News":
            elementclassName='bg-success bg-gradient'
            break
        default:
            elementclassName='bg-info bg-gradient'
    }
    return (
        <li className={elementclassName + " card flex-row shadow-lg text-white my-2"}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <img src={news} style={{'objectFit':'fill', "height":'auto'}} width={155}  className={`img-thumbnail img-fluid rounded d-inline`} alt="breaking news"/>
            <span className={`position-absolute top-0 end-90 translate-middle badge border rounded-pill bg-light`}>
                <button type={"button"} className={`btn btn-close`} onClick={()=>deleteHandler(id)} aria-label={`Close`}></button>
            </span>
        </li>
    );
};

export default NewsListItem;