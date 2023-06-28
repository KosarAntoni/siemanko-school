import React from 'react';
import { render, screen } from '@testing-library/react';

import Duplex from '.';
import { getOffset } from './Duplex.component';
import { mock } from './Duplex.mock';

describe('Duplex component renders correctly', () => {
  it('renders Duplex', () => {
    render(<Duplex {...mock} />);

    const duplexNode = screen.getByTestId('duplex-item');

    expect(duplexNode).toBeInTheDocument();

    expect(duplexNode).toMatchSnapshot();

    const imageNode = screen.getByAltText(mock.image.description);
    expect(imageNode).toBeInTheDocument();
    expect(imageNode).toHaveAttribute('style', 'color: transparent; --translate-y: 0px;');
  });

  it('renders Duplex with image on right side', () => {
    render(<Duplex {...mock} imagePosition="Right" />);

    const duplexNode = screen.getByTestId('duplex-item');

    expect(duplexNode).toBeInTheDocument();

    expect(duplexNode).toMatchSnapshot();

    expect(duplexNode).toHaveClass('duplexImageOnRight');
  });

  it('getOffset works correctly', () => {
    expect(getOffset(36, 573)).toBe(-3);
    expect(getOffset(-124, 720)).toBe(9);
    expect(getOffset(-124)).toBe(0);
  });
});
