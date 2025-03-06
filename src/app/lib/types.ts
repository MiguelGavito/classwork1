export interface User {
  name: { first: string; last: string };
  email: string;
  location: { city: string; state: string; country: string };
  dob: { date: string };
  login: { password: string };
  picture: { large: string; thumbnail: string };
}
