import React from 'react'
import Form from "./Form";
import List from './List'
const Main = () => {
  return(
    <React.Fragment>
    <div>
      <h2>Articles</h2>
      <List/>
    </div>
  <div>
    <h2>Add a new article</h2>
    <Form />
  </div>
  </React.Fragment>
  )
}
  export default Main;