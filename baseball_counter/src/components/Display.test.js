import React from 'react';
import {render} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from "./Display.js";

/**
  -display the count of `balls` and `strikes` for the at-bat.
- resets both balls and strikes to 0 when a player reaches 3 strikes or 4 balls.
- resets both balls and strikes to 0 when a player connects any type of hit.
- should be updated when the user records activity on the `Dashboard` component.
**/

describe('<Display/>' , () => {
  
   test('It should render the correct count of ball and strikes' , () => {
        const {getByText} = render(<Display balls="3" strikes="2" />);
        getByText(/2 strikes/i);
        getByText(/3 balls/i);
   });
});