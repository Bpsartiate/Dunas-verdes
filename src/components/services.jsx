// src/components/services.js
export const processPayment = async (form) => {
  console.log("Processing payment for:", form);
  return true;
};

export const sendBookingEmail = async (form) => {
  console.log("Sending confirmation email for:", form);
  return true;
};