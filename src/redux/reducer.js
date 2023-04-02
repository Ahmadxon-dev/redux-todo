const initialState = {
    news:[],
    filters:[],
    newsLoadingStatus:'not'
}
const reducer =(state=initialState, action)=>{
    switch (action.type) {
        case "NEWS_FETCHING":return {
            ...state,
            newsLoadingStatus: 'loading'
        }
        case "NEWS_FETCHED":
            return {
                ...state,
                news:action.payload,
                newsLoadingStatus: "sam"
            }
        case "NEWS_FETCHING_ERROR": return {
            ...state,
            newsLoadingStatus: 'error'
        }
        case "NEWS_DELETE":
            return state.news.filter(element=>element.id!==action.payload)
        default:return state
    }
}

export default reducer