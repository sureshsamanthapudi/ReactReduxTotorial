import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state: any) {
    console.log("state", state)
    return { 
        github: state.gitHub
    };
}

interface IComponentProps {
    github: any;
}

const ThunkList = (props: IComponentProps) => {
    console.log("ThunkList",props)
    const { github } = props;
    return (
        <div>
        <ul>
        <li>{`Total Folowwers ${github?.followers}`}</li>
      </ul>
        </div>
    )
}

const TList = connect(mapStateToProps)(ThunkList)

export default TList;