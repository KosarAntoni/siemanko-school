import { fireEvent, render, screen } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('renders a Button as button', () => {
    const testFunc = jest.fn();
    render(<Button onClick={testFunc}>Test</Button>);

    const buttonNode = screen.getByRole('button', {
      name: 'Test',
    });

    expect(buttonNode).toMatchSnapshot();

    expect(buttonNode).toBeInTheDocument();

    fireEvent.click(buttonNode);
    expect(testFunc).toHaveBeenCalled();

    expect(buttonNode).toHaveClass('button buttonOrange buttonSolid buttonRegular');
  });

  it('renders a Button as external link', () => {
    const url = 'https://www.test.com/';
    render(
      <Button url={url} style="Outline" color="White" size="Small">
        Test
      </Button>,
    );

    const buttonNode = screen.getByRole('link', {
      name: 'Test',
    });

    expect(buttonNode).toMatchSnapshot();

    expect(buttonNode).toBeInTheDocument();

    expect(buttonNode).toHaveAttribute('href', url);

    expect(buttonNode).toHaveAttribute('target', '_blank');

    expect(buttonNode).toHaveClass('button buttonWhite buttonOutline buttonSmall');
  });

  it('renders a Button as intenal link', () => {
    const url = '/test';
    render(<Button url={url}>Test</Button>);

    const buttonNode = screen.getByRole('link', {
      name: 'Test',
    });

    expect(buttonNode).toMatchSnapshot();

    expect(buttonNode).toBeInTheDocument();

    expect(buttonNode).toHaveAttribute('href', url);
  });

  it('renders a Button as span', () => {
    render(<Button size="Big">Test</Button>);

    const buttonNode = screen.getByText('Test');

    expect(buttonNode).toMatchSnapshot();

    expect(buttonNode).toBeInTheDocument();

    expect(buttonNode).toHaveClass('button buttonOrange buttonSolid buttonBig');
  });
});
