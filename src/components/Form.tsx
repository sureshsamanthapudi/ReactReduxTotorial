import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addArticle,  fetchGithubData} from '../actions/main'

function mapDispatchToProps(dispatch: any) {
   return {
        addArticle: (text: any) => dispatch(addArticle(text)),
        getUser: (title: any) => dispatch(fetchGithubData())
    }
}

interface IComponentProps{
    addArticle: any
    getUser: any
}

interface IComponentState {
    title: string
}

class ConnectedForm extends Component<IComponentProps,IComponentState> {

    public constructor(props: IComponentProps){
        super(props);
        this.state = {
            title: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    private handleSubmit(event: any) {
      // this.getUsers(event);
      this.handleRedux(event)
    }

    private handleRedux(event: any) {
        event.preventDefault();
        const {title} = this.state;
        this.props.addArticle({ title });
        this.setState({
            title: ''
        })
    }

    private getUsers(event: any){
        event.preventDefault();
        const {title} = this.state;
        this.props.getUser(title);
    }

    private handleChange(event: any) {
        this.setState({ title : event.target.value });
    }

    public render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">SAVE</button>
            </form>
        )
    }
}

const Form = connect(null,mapDispatchToProps)(ConnectedForm)
export default Form;