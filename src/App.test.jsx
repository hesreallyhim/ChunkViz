import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App', () => {
  it('passes a simple test', () => {
    expect(true).toBe(true);
  });
  
  it('renders without crashing', () => {
    const { container } = render(<App />);
    screen.debug();
    expect(container.querySelector('.App')).not.toBeNull();
  });
});
