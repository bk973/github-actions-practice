import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test( 'renders welcome message', () =>
{
  render( <App /> );

  const message = screen.getByText( 'Welcome' );
  expect( message ).toBeInTheDocument();
} );
