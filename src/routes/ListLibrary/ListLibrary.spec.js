import React from 'react';
import { render } from '../../utils/tests';
import ListLibrary from './ListLibrary';

const props = {}

describe('ListLibrary', () => {
  it('should render component', () => {
    const { debug } = render(<ListLibrary {...props} />);
    debug();
  })
});

