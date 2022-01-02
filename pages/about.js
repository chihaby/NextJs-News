import Meta from '../components/Meta';

const about = () => {
  return (
    <div>
      {/* override the meta of head title for this component*/}
      <Meta title='About' />
      <h1>About</h1>
    </div>
  );
};

export default about;
