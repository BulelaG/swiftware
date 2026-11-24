import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Swiftware studio positioning', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /affordable websites, stores & web tools/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /get a whatsapp quote/i }).length).toBeGreaterThan(0);
});
