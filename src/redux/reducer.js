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
            return {
                ...state,
                news: state.news.filter(element=>element.id!==action.payload)
            }
        case "ADD_NEW":
            const {id,name,description,category} = action.payload
            const newData = {
                id,
                name,
                description,
                category
            }
            return{
                ...state,
                news:[...state.news, newData]

            }
        default:return state
    }
}

export default reducer