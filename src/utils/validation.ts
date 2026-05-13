export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[0-9]).{6,}$/;

export const validateEmail = (email: string): boolean => emailRegex.test(email);
export const validatePassword = (password: string): boolean =>
  passwordRegex.test(password);
