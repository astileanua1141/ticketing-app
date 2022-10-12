import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1> Landing Page </h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server
    // req should be made to http://ingress-nginx.....
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers,
      }
    );
    console.log('===Initial props called===');

    return data;
  } else {
    //we are on the browser
    // req can be made with a base url of ''

    const { data } = await axios.get('/api/users/currentuser');
    console.log('===we are on the browser! ===');
    return data;
  }
};

export default LandingPage;
