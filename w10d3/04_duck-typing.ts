interface IPotentialUser {
  username: string;
  password: string;
}

const login = (user: IPotentialUser): boolean => {
  user.password
  return true;
};

// const acceptsString = (str: string) => {}
// const myArg = 'hello';
// acceptsString(myArg);

const john = {
  username: 'jstamos',
  password: '1234',
  faveMusic: []
};

login(john);
