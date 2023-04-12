interface IDog {
  breed: string;
  weight: number;
  goForAWalk: (distance: number, trailName: string) => boolean;
}

interface User {
  id?: number;
  username: string;
  password: string;
  pet: IDog;
}

const user: User = {
  id: 4,
  username: 'jstamos',
  password: '1234',
  pet: {
    breed: 'golden retriever',
    weight: 42,
    goForAWalk: (distance: number, trailName: string) => { return true; }
  }
};

const users: User[] = [];
users.push(user);
