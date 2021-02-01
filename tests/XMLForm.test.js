import {
  fireEvent,
  getByTestId,
  getByLabelText,
  render,
  screen,
} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import XMLForm from '../components/XMLForm';

test('All fields are required', () => {
  render(<XMLForm />);
  expect(
    // getByLabelText(document.documentElement, 'First Name')
    getByTestId(document.documentElement, 'required-firstName')
  ).toBeRequired();
  expect(
    getByTestId(document.documentElement, 'required-lastName')
  ).toBeRequired();
  expect(
    getByTestId(document.documentElement, 'required-address')
  ).toBeRequired();
  expect(
    getByTestId(document.documentElement, 'required-companyName')
  ).toBeRequired();
});
