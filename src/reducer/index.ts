const initialState = {
    articles: [],
  };
function rootReducer(state = initialState, action: any){
    console.log("action",action)
    if(action.type === 'add_article'){
        return Object.assign({},state,{
            articles: state.articles.concat(action.payLoad)
        })
    } else if(action.type === 'fetch_github_data'){
      return Object.assign({},state, {gitHub:  action.data })
    }
  return state;  
}

export default rootReducer;