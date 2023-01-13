export interface RegisterForm {
  name: string;
  lastname: string;
  email: string;
  password: string;
  terms_acepted: boolean
}

export interface LoginForm {
  email: string;
  password: string;
}
