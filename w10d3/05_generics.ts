interface IContainer<T, B> {
  name: string;
  contents: T;
  moreStuff?: B;
}

const stringContainer: IContainer<string, string> = {
  name: 'string container',
  contents: 'hello world'
};

const numberContainer: IContainer<number, boolean> = {
  name: 'number container',
  contents: 42
};
