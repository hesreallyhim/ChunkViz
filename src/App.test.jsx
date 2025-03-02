import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App', () => {
  let container;

  beforeEach(() => {
    const renderResult = render(<App />);
    container = renderResult.container;
  });

  it('passes a simple test', () => {
    expect(true).toBe(true);
  });

  it('renders without crashing', () => {
    expect(container.querySelector('.App')).not.toBeNull();
  });

  it('renders the application title', () => {
    expect(screen.getByText('ChunkViz v0.1')).toBeInTheDocument();
  });

  it('displays text area for input', () => {
    const textarea = container.querySelector('textarea');
    expect(textarea).not.toBeNull();
    expect(textarea.value.length).toBeGreaterThan(0); // Default text should be loaded
  });

  it('displays chunking controls', () => {
    expect(screen.getByText('Chunk Size:')).toBeInTheDocument();
    expect(screen.getByText('Chunk Overlap:')).toBeInTheDocument();
    expect(screen.getByText('Splitter:')).toBeInTheDocument();
  });

  it('allows changing the chunk size', () => {
    const chunkSizeInput = screen.getAllByDisplayValue('25')[0]; // Get the first matching input
    fireEvent.change(chunkSizeInput, { target: { value: '50' } });
    expect(screen.getAllByDisplayValue('50')[0]).toBeInTheDocument();
  });

  it('displays chunking statistics', () => {
    expect(screen.getByText(/Total Characters:/)).toBeInTheDocument();
    expect(screen.getByText(/Number of chunks:/)).toBeInTheDocument();
    expect(screen.getByText(/Average chunk size:/)).toBeInTheDocument();
  });

  it('has explanation section', () => {
    expect(screen.getByText("What's going on here?")).toBeInTheDocument();
  });
});
