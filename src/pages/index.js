import Link from 'next/link';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const images = [
  'https://github.com/sydhsn/trainingportal/tree/master/static/portfolio/14.jpg',
  'https://github.com/sydhsn/trainingportal/tree/master/static/portfolio/13.jpg',
  'https://github.com/sydhsn/trainingportal/tree/master/static/portfolio/12.jpg',
  'https://github.com/sydhsn/trainingportal/tree/master/static/portfolio/11.jpg'
];

const Homepage = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        <h1>Welcome to concept vision classes</h1>
        <div>Get online classes from anywhere</div>
      </div>
    </div>
    <div className="latest-work">
      <h2>What we do</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 600px;
        background: transparent url(/static/cover.jpg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        left: 60px;
        background: #fff;
        padding: 30px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;
