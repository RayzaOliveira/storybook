import Login from './Login';

export default {
  title: 'Molecules/Login',
  component: Login,
};

const Example = () => (
  <Login onSubmit={(data) => alert(JSON.stringify(data))} />
);

export { Example };
