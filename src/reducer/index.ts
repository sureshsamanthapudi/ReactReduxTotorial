const initialState = {
    articles: []
  };
function rootReducer(state = initialState, action: any){
    if(action.type === 'ADD_ARTICLE'){
        return Object.assign({},state,{
            articles: state.articles.concat(action.payload)
        })
    }
  return state;  
}

export default rootReducer;