import React from 'react'
import { connect } from 'react-redux';
import {fetchGithubData} from '../actions/main'

const  mapPropsToState= (dispatch: any) => {
  return {
    getUser: (title: any) => dispatch(fetchGithubData())
  }  
}

interface IComponentProps {
    getUser: any
    history: any
}
const ThunkMain = (props: IComponentProps) => {

 const onClickSubmit = (event: any) => {
    event.preventDefault();
    props.getUser("title");
    props.history.push("/redux-thunk-list");
}
 
 return (
    <div>
        <span>Redux Thunk</span>
        <button type="button" onClick={onClickSubmit}>Submit</button>
    </div>
 )
}

var TMain = connect(null,mapPropsToState)(ThunkMain)
export default TMain;

