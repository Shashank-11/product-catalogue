import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryHeader from '../PrimaryHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrimaryHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
