import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />)
});

test("form header properly renders", () => {
  render(<CheckoutForm />)

  const header = screen.getByText(/checkout form/i);

  expect(header).toBeInTheDocument()
  expect(header).toHaveTextContent(/checkout form/i)
})

test("shows success message on submit with form details", () => {
  // Arrange 
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText(/First Name/i);
  const lastName = screen.getByLabelText(/Last Name/i);
  const address = screen.getByLabelText(/Address/i);
  const city = screen.getByLabelText(/City/i);
  const state = screen.getByLabelText(/State/i);
  const zip = screen.getByLabelText(/Zip/i);
  const submitButton = document.querySelector('button');

   // Act 
   userEvent.type(firstName, 'Amanda');
   userEvent.type(lastName, 'Burtness');
   userEvent.type(address, '123 Test Street');
   userEvent.type(city, 'Random');
   userEvent.type(state, 'CA');
   userEvent.type(zip, '12345');
   userEvent.click(submitButton);

   // Assert 
   const successMessage = document.querySelector(
      "[data-testid='successMessage']"
    );

    expect(successMessage).toHaveTextContent(/Amanda Burtness/);
    expect(successMessage).toHaveTextContent(/123 Test Street/);
    expect(successMessage).toHaveTextContent(/Random/);
    expect(successMessage).toHaveTextContent(/CA/);
    expect(successMessage).toHaveTextContent(/12345/);

});
