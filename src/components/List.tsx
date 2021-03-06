import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  console.log("state", state)
  return { 
          articles: state.articles,
      };
};

interface IComponentProps {
  articles: any;
}

class ConnectedList extends Component<IComponentProps, {}> {
  public constructor(props: IComponentProps) {
    super(props);
  }
  public render() {
    const { articles } = this.props;
    return (
      <ul>
        {articles.map((el: any, index: number) => (
          <li key={index}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;
