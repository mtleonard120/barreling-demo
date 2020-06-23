import React from 'react';
import { shallow } from 'enzyme';
import {Table} from './Table';

it('renders without crashing', () => {
  shallow(<Table/>)
});