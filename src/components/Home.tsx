import React from 'react'

interface IComponentProps{
    history: any;
}
const Home = (props: IComponentProps) => {

    const onClickRedux = () => {
        props.history.push("/redux");
    }

    const onClickReduxThunk = () => {
        props.history.push("/redux-thunk");
    }
   
    return (
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column',height: "100vh"}}>
            
            <button style={{height: 50,width: 160, backgroundColor: '#2522d5', color: 'white'}} type='button' onClick={onClickRedux}>Redux</button>
           
            <button style={{marginTop: 15, height: 50,width: 160, backgroundColor: '#2522d5', color: 'white'}} type='button' onClick={onClickReduxThunk}>Redux-Thunk</button>
        </div>
    )
}

export default Home;