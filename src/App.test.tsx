import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('CharacterCounter Component', () => {
  test('renders input and character count', () => {
    // Your test code here
    render(<App />);
    expect(screen.getByPlaceholderText(/type something/i)).toBeInTheDocument();
    expect(screen.getByText(/Character Count: 0/i)).toBeInTheDocument();
  });

  test('updates character count correctly', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/type something/i);
  
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(screen.getByText('Character Count: 5')).toBeInTheDocument();
  
    fireEvent.change(input, { target: { value: 'hello world' } });
    expect(screen.getByText('Character Count: 11')).toBeInTheDocument();
  });
});