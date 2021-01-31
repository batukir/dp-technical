import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import XMLForm from '../components/XMLForm';

test('All fields are required', () => {
  render(<XMLForm />);
    expect(
      getByTestId(document.documentElement, 'required-firstName')
    ).toBeRequired();
  expect(
    getByTestId(document.documentElement, 'required-lastName')
  ).toBeRequired();
  expect(
    getByTestId(document.documentElement, 'required-email')
  ).toBeRequired();
  expect(
    getByTestId(document.documentElement, 'required-password')
  ).toBeRequired();
});
