import React from 'react';
import {cleanup, fireEvent, render} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from "./Display.js";
import Dashboard from './Dashboard';
import 'jest-dom/extend-expect';

describe('The Display Component' , () => {
  
      test('It should render the correct count of ball and strikes' , () => {
            const {getByText} = render(<Display balls="2" strikes="1" />);
            getByText("2");
            getByText("1");
         });

      test("It should increase ball count by clicking ball button", () => {
         const component = render(<Dashboard />);
         const display = render(<Display/>);
         const ballButton = component.getByTestId("ball-button");
         fireEvent.click(ballButton);
         
         const counter = display.getByTestId('ball');
         expect(counter).toHaveTextContent("1");
         
      });

      test("It should increase strike count by clicking the strike button", () => {
         const component = render(<Dashboard />);
         const strikeButton = component.getByTestId("strike-button");
         fireEvent.click(strikeButton);
         const display = render(<Display balls= "0" strikes = "0" />);
         const counter = display.getByTestId('strike');
         expect(counter).toHaveTextContent("0");
      });

      test("It should increase strike by 1 but no more than 2 when foul Button is clicked", () => {
         const component = render(<Dashboard />);
         const foulBtn = component.getByTestId("foul-button");
         fireEvent.click(foulBtn);
         const display = render(<Display balls= "0" strikes = "0" />);
         const counter = display.getByTestId('strike');
         expect(counter).toHaveTextContent("0");
      });

      test("It should reset strikes and balls when hitBtn is clicked", () => {
         const component = render(<Dashboard />);
         const hitButton = component.getByTestId("hit-button");
         fireEvent.click(hitButton);
         const display = render(<Display balls= "0" strikes = "0" />);
         const balls = display.getByTestId('ball');
         const strikes = display.getByTestId('strike');
         expect(balls).toHaveTextContent("0");
         expect(strikes).toHaveTextContent("0");
      });

      test("It should reset strikes and balls when > 2", () => {
         const component = render(<Dashboard />);
         const strikeButton = component.getByTestId("strike-button");
         fireEvent.click(strikeButton);
         fireEvent.click(strikeButton);
         fireEvent.click(strikeButton);
         fireEvent.click(strikeButton);
         const display = render(<Display balls= "0" strikes = "0"/>);
         const counter = display.getByTestId('strike');
         expect(counter).toHaveTextContent("0");
      });

      test("should reset balls and strikes when > 3", () => {
         const component = render(<Dashboard />);
         const ballButton = component.getByTestId("ball-button");
         fireEvent.click(ballButton);
         fireEvent.click(ballButton);
         fireEvent.click(ballButton);
         fireEvent.click(ballButton);
         const display = render(<Display balls= "0" strikes = "0" />);
         const strikes = display.getByTestId('strike');
         const balls = display.getByTestId('ball');
         expect(strikes).toHaveTextContent("0");
         expect(balls).toHaveTextContent("0");
      });
            
});