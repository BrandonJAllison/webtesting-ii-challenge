import React from 'react';
import {cleanup, fireEvent, render} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
afterEach(cleanup);
import Display from "./Display.js";
import Dashboard from './Dashboard';
import 'jest-dom/extend-expect';
/**
 -display the count of `balls` and `strikes` for the at-bat.
- resets both balls and strikes to 0 when a player reaches 3 strikes or 4 balls.
- resets both balls and strikes to 0 when a player connects any type of hit.
- should be updated when the user records activity on the `Dashboard` component.
**/

describe('The Display Component' , () => {
  
      test('It should render the correct count of ball and strikes' , () => {
            // const component = render(<Display balls="2" strikes="1" />);
            // component.getByText(/2 balls/i);
            // component.getByText(/1 strikes/i);
            const {getByText} = render(<Display balls="0" strikes="0" />);
            getByText(/balls:0/i);
            getByText(/strikes:0/i);
         });

      test("It should increase ball count by clicking ball button", () => {
         const component = render(<Dashboard />);
         const ballButton = component.getByTestId("ball-button");
         fireEvent.click(ballButton);
         const display = render(<Display balls={0} />);
         const counter = display.getByTestId('ball');
         expect(counter).toHaveTextContent(/balls:0/i);
      });

      test("It should increase strike count by clicking the strike button", () => {
         const component = render(<Dashboard />);
         const strikeButton = component.getByTestId("strike-button");
         fireEvent.click(strikeButton);
         const display = render(<Display />);
         const counter = display.getByTestId('strike');
         expect(counter).toHaveTextContent(/strikes:1/i);
      });

      test("It should increase strike by 1 but no more than 2 when foul Button is clicked", () => {
         const component = render(<Dashboard />);
         const foulBtn = component.getByTestId("foul-button");
         fireEvent.click(foulBtn);
         const display = render(<Display />);
         const counter = display.getByTestId('strike');
         expect(counter).toHaveTextContent(/strikes:2/i);
      });

      test("It should reset strikes and balls when hitBtn is clicked", () => {
         const component = render(<Dashboard />);
         const hitButton = component.getByTestId("hit-button");
         fireEvent.click(hitButton);
         const display = render(<Display />);
         const balls = display.getByTestId('ball');
         const strikes = display.getByTestId('strike');
         expect(balls).toHaveTextContent(/balls:0/i);
         expect(strikes).toHaveTextContent(/strikes:0/i);
      });

      test("It should reset strikes and balls when > 2", () => {
         const component = render(<Dashboard />);
         const strikeButton = component.getByTestId("strike-button");
         fireEvent.click(strikeButton);
         fireEvent.click(strikeButton);
         fireEvent.click(strikeButton);
         fireEvent.click(strikeButton);
         const display = render(<Display />);
         const counter = display.getByTestId('strike');
         expect(counter).toHaveTextContent(/strikes:0/i);
      });

      test("should reset balls and strikes when > 3", () => {
         const component = render(<Dashboard />);
         const ballButton = component.getByTestId("ball-button");
         fireEvent.click(ballButton);
         fireEvent.click(ballButton);
         fireEvent.click(ballButton);
         fireEvent.click(ballButton);
         const display = render(<Display />);
         const strikes = display.getByTestId('strike');
         const balls = display.getByTestId('ball');
         expect(strikes).toHaveTextContent("Strikes:0");
         expect(balls).toHaveTextContent("Balls:0");
      });
            
});