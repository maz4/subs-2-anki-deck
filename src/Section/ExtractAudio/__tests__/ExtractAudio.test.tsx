import { render, screen } from '@testing-library/react';
import ExtractAudio from '..';

describe('ExtractAudio.tsx', () => {
  it('should render two inputs and a submit button', () => {
    render(<ExtractAudio />);

    const source = screen.getByLabelText(/Source video file/i);
    const output = screen.getByLabelText(/Output directory/i);
    const converButton = screen.getByRole('button', { name: /convert/i });

    expect(source).toBeInTheDocument();
    expect(output).toBeInTheDocument();
    expect(converButton).toBeInTheDocument();
  });
});
