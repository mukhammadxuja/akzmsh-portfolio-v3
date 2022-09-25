import Loadable from 'react-loadable';

const loader = () => <div>Loading.</div>;

const HomeLazy = Loadable({
  loader: () => import('../container/Home'),
  loading: loader,
  timeout: 10000,
});

const Index = () => {
  return (
    <div>
      <HomeLazy />
    </div>
  );
};

export default Index;
