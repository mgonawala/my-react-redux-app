import React from 'react';
import './App.css';
import './bootstrap.min.css';
import PropTypes, {func} from 'prop-types';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

function Hero(props){
    return(
        <div className="row">
            <div className="jumbotron col-10 offset-1">
                <h1>
                    Author Quiz
                </h1>
                <p>
                   Select the book written by Author shown.
                </p>
            </div>
        </div>
    );
}

function Turn({author, books, highlight, onAnswerSelected}){
    function highLightToBgColor(highlight) {
        const mapping = {
            'none':'',
            'correct': 'green',
            'wrong': 'red'
        }
        return mapping[highlight];
    }
 return(
     <div id="turn" className="row turn" style={{backgroundColor: highLightToBgColor(highlight)}}>
            <div className="col-4 offset-1">
                    <img src={author.imageUrl} className="authorimage" alt="Author"/>
            </div>
         <div className="col-6">
             {books.map((title,index) => <Book  title={title} key={title} onClick={onAnswerSelected}/>)}
         </div>
     </div>
 );
}

function Book({title, onClick}) {
    return( <div className="answer" onClick={()=>onClick(title)}>
        <h4>{title} </h4>
    </div>);
}
function Continue({show, onContinue}){
    return(
        <div className="row continue">
            {
                show
                    ? <div className="col-11">
                        <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
                    </div>
                    : null
            }
        </div>
    );
}

function Footer(){
    return(
        <div className="row" id="footer">
            <div className="col-12">
                <p className="text-muted credit">
                    All images are from <a href="https://en.wikipedia.org/wiki"> wiki </a> page.
                </p>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return{
        turnData: state.turnData,
        highlight: state.highlight
    }
}

function mapDispatchToProps(dispatch){
    return{
        onAnswerSelected: (answer) => {
            console.log('dispatching in answer_selected'+ answer);
            dispatch({type: 'ANSWER_SELECTED', answer})
        },
        onContinueHandler: () => dispatch({type: 'CONTINUE'}),
    }
}

const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(
    function ({turnData, highlight, onAnswerSelected, onContinueHandler}) {
        return (
            <div className="container-fluid">
                <Hero/>
                <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
                <Continue show={highlight === 'correct'} onContinue={onContinueHandler}/>
                <p><Link to="/add">Add Author</Link></p>
                <Footer />
            </div>
        );
    }
);


Turn.propTypes = {
    author : PropTypes.shape({
            name: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            imageSource: PropTypes.string,
            books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
}

export default AuthorQuiz;
