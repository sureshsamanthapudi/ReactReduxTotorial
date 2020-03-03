const initialState = {
    articles: []
  };
function rootReducer(state = initialState, action: any){
    if(action.type === 'add_article'){
        return Object.assign({},state,{
            articles: state.articles.concat(action.payLoad)
        })
    }
  return state;  
}

export default rootReducer;