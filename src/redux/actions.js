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
    // console.log(id)
    return{
        type:'NEWS_DELETE',
        payload:id
    }
}

export const addNew = (data)=>{
    return{
        type:"ADD_NEW",
        payload:data
    }
}