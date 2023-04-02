import React, {useEffect} from 'react';
import useHttp from "../hook/useHttp";
import {useDispatch, useSelector} from "react-redux";
import {newsFetched, newsFetching, newsFetchingError} from "../redux/actions";
import Spinner from "./Spinner";
import Error from "./Error";
import NewsListItem from "./NewsListItem";

const NewsList = () => {
    const dispatch = useDispatch()
    const {news=[], newsLoadingStatus} = useSelector(state=>state)
    const {request} = useHttp()
    useEffect(()=>{
        dispatch(newsFetching())
        request('http://localhost:3001/news', 'get')
            .then(data=> dispatch(newsFetched(data)))
            .catch(()=>dispatch(newsFetchingError()))
    },[])
    console.log(news)

    if (newsLoadingStatus=='loading'){
        return <Spinner/>
    }else if (newsLoadingStatus=='error'){
        return <Error/>
    }
    const renderNewsList  = arr=>{
        if (arr.length===0){
            return <h4>News doesn't exist</h4>
        }
        return arr.map(({id,...props})=>{
            return <NewsListItem key={id} {...props} id={id} />
        })
    }
    const element = renderNewsList(news)
    return (
        <ul >{element}</ul>
    )
};

export default NewsList;