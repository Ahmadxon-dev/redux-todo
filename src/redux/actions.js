export const newsFetching=()=>{
    return{
        type:'NEWS_FETCHING'
    }
}
export const newsFetched = (news)=>{
    return{
        type:"NEWS_FETCHED",
        payload:news
    }
}

export const newsFetchingError = ()=> {
    return {type: "NEWS_FETCHING_ERROR"}
}

export const newsDelete = (id)=>{
    return{
        type:'NEWS_DELETE',
        payload:id
    }
}