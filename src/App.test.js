import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('passes a simple test', () => {
    expect(true).toBe(true);
  });
  
  it('renders without crashing', () => {
    render(<App />);
    expect(document.querySelector('.App')).not.toBeNull();
  });
});
