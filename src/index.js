import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route , withRouter} from 'react-router-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';
import AddAuthorForm from "./AddAuthorForm";
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

const authors = [

    {
        name: 'Mark Twain',
        imageUrl: 'authors/MarkTwain.jpg',
        imageSource: 'Wikimedia commons',
        books: ['The Adventures of Huckleberry Finn', 'Life on Mississippi', 'Roughing It']
    }
    ,
    {
        name: 'William Shakespeare',
        imageUrl: 'authors/William.jpg',
        imageSource: 'Wikimedia commons',
        books: ['Four Tragedies', 'Sonnet 130', 'The rape of Lucrece']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'authors/Rowling.jpg',
        imageSource: 'Wikimedia commons',
        books: ['Harry Potter', 'Lethal White', 'Career of Evil']
    }
];

function getTurnData(authors) {
    console.log(authors.length);
    const allBooks = authors.reduce( function (p, c, i) {
        return p.concat(c.books)
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);
    return {
        books: fourRandomBooks,
        author: authors.find( author => author.books.some( title => title === answer))
    }
}

function reducer(state = {authors, turnData: getTurnData(authors), highlight: ''}, action){
    switch (action.type) {
        case 'ANSWER_SELECTED':
            console.log(action);
            const isCorrect = state.turnData.author.books.some(title => title === action.answer);
            return Object.assign({},state, {highlight: isCorrect? 'correct':'wrong'});
        case 'CONTINUE':
            return Object.assign({},state, {highlight: '', turnData : getTurnData(authors)})
        case 'ADD_AUTHOR':
            return  Object.assign({}, state, {authors: authors.push(action.author)});
        default:
            return state;
    }
    return state;
}

let store = Redux.createStore(reducer);


class AddAuthorFormWrapper extends React.Component{
    render() {
        const {history} = this.props;
        return(
            <AddAuthorForm onAddAuthorForm={(author)=> {
                authors.push(author);
                console.log(authors.length);
                history.push('/');
            } }/>
        );
    }
}
const AddAuthFormWrapperWithRouter = withRouter(AddAuthorFormWrapper);



    ReactDOM.render(
        <ReactRedux.Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={AuthorQuiz}/>
            <Route path="/add" component={AddAuthorForm }/>
        </BrowserRouter>
        </ReactRedux.Provider>
        ,
        document.getElementById('root')
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
