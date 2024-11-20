import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../page'

test('renders the welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to Next.js!')).toBeInTheDocument();
  });