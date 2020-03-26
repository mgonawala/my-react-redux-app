import React from 'react';
import ReactDOM from 'react-dom';
/*import { render, screen} from '@testing-library/react';*/
/*import {getByTestId, getByText} from '@testing-library/dom'*/
import AuthorQuiz from './AuthorQuiz';
import Enzyme , {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});


const state = {
  turnData: {
    books:['The Adventures of Huckleberry Finn', 'Four Tragedies'],
    author: {
      name: 'Mark Twain',
      imageUrl: 'authors/MarkTwain.jpg',
      imageSource: 'Wikimedia commons',
      books: ['The Adventures of Huckleberry Finn', 'Life on Mississippi', 'Roughing It']
    }
  },
  highlight: 'none'
};

describe("Author quiz",() => {

    it('renders without crashing  ', function () {
      const element = document.createElement("div");
      ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>, element);
    });

    describe("When no answer is selected", () =>{
        let wrapper;
        beforeAll( () => {
          wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>);
        });

      it('should not have background color', function () {
        expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
      });
    });

  describe("When correct answer is selected", () =>{
    let wrapper;
    let temp = Object.assign({},state,{highlight: 'correct'})
    beforeAll( () => {
      wrapper = mount(<AuthorQuiz {...temp} onAnswerSelected={()=>{}}/>);
    });

    it('should not have background color', function () {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
    });
  });


  describe("When wrong answer is selected", () =>{
    let wrapper;
    let temp = Object.assign({},state,{highlight: 'wrong'})
    beforeAll( () => {
      wrapper = mount(<AuthorQuiz {...temp} onAnswerSelected={()=>{}}/>);
    });

    it('should not have background color', function () {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
    });
  });

  describe("when the first answer is selected",()=>{

    let wrapper;
    let temp = Object.assign({},state,{highlight: 'correct'});
    const onAnswerSelected = jest.fn();

    beforeAll(()=>{
      wrapper = mount(<AuthorQuiz {...temp} onAnswerSelected={onAnswerSelected}/>)
      wrapper.find(".answer").first().simulate('click');
    });

    it('onAnswerSelected should be called', function () {
      expect(onAnswerSelected).toHaveBeenCalled();
    });

    it('Should receive The Adventures of Huckleberry Finn', function () {
      expect(onAnswerSelected).toHaveBeenCalledWith("The Adventures of Huckleberry Finn");
    });
  });
});
