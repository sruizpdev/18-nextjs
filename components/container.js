import Navigation from './navigation';
import Head from 'next/head';

const Container = (props) => {
  return (
    <>
      <Head>
        <title>Mi app next</title>
      </Head>
      <Navigation />
      {props.children}
    </>
  );
};

export default Container;
