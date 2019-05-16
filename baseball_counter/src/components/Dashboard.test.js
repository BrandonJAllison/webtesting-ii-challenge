import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';


describe('Dashboard Component Testing', () => {
    
      it('Should render the dashboard component', () => {
           render(<Dashboard />);
      });

      it ('renders the strike, ball, hit, and foul buttons', () => {
          const dashboard = render(<Dashboard />);
          const strikeButton = dashboard.getByText(/strike/i);
          const ballButton = dashboard.getByText(/ball/i);
          const hitButton = dashboard.getByText(/hit/i);
          const foulButton = dashboard.getByText(/foul/i);
  
          expect(strikeButton).toHaveTextContent(/strike/i);
          expect(ballButton).toHaveTextContent(/ball/i);
          expect(hitButton).toHaveTextContent(/hit/i);
          expect(foulButton).toHaveTextContent(/foul/i);
      })

     
});