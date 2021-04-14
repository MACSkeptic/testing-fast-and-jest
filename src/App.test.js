import { render, screen, fireEvent } from '@testing-library/react';
import { AppWithFastRaw, AppWithMaterial } from './App';

test('app with fast (raw)', async () => {
  render(<AppWithFastRaw />);
  screen.getByText(/Tab panel 1/i)
  fireEvent.click(screen.getByText(/Tab two/i));
  screen.getByText(/Tab panel 2/i)
});

test('app with material', async () => {
  render(<AppWithMaterial />);
  screen.getByText(/Tab panel 1/i)
  fireEvent.click(screen.getByText(/Tab two/i));
  screen.getByText(/Tab panel 2/i)
});
