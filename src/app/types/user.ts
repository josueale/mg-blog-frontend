export interface User {
  _id:       string;
  name:      string;
  lastname:  string;
  email:     string;
  createdAt: string;
  updatedAt: string;
}

export type UserRegister = User

export interface UserLogin {
  authenticated:  boolean;
  user:           User;
  token:          string;
}

export interface UserContext extends User {
  token:            string
  isAuthenticated:  boolean
}