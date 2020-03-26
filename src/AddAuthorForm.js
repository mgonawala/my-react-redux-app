import React from 'react';
import './AddAuthorForm.css';
import './bootstrap.min.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class AuthorForm extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            bookTemp: '',
            books: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.bookAddHandler = this.bookAddHandler.bind(this);
    }

    bookAddHandler(event){
        event.preventDefault();
        this.setState({
            books:  this.state.books.concat(this.state.bookTemp),
            bookTemp: ''
        })
    }
    onSubmitHandler(event){
        event.preventDefault();
        this.props.onAddAuthorForm(this.state);
    }

    onChangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onChangeHandler}/>
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl}  onChange={this.onChangeHandler}/>
                </div>
                <div className="AddAuthorForm__input">
                    {this.state.books.map(book => <p key={book}>{book}</p>)}
                    <label htmlFor="bookTemp">Book</label>
                    <input type="text" name="bookTemp" value={this.state.bookTemp}  onChange={this.onChangeHandler}/>
                    <button onClick={this.bookAddHandler} >+</button>
                </div>
                <input type="submit" value="Add Author"/>
            </form>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch,props){
    return{
        onAddAuthorForm: (author) => {
            dispatch({type: 'ADD_AUTHOR', author})
            props.history.push('/');
        }
    }
}

const AddAuthorForm = connect(mapStateToProps, mapDispatchToProps)(
    function ({match, onAddAuthorForm}) {
        return(
            <div className="AddAuthorForm">
                <h1>Add Author form</h1>
                <AuthorForm onAddAuthorForm={onAddAuthorForm}/>
            </div>
        );
    }
);




export default withRouter(AddAuthorForm);