import Layout from '../components/Layout';

const Training = () => (
  <Layout title="Training">
    <h1>Training</h1>
    <div className="services">
      <div className="services-list">
        <div className="item">
          <img src="https://github.com/sydhsn/trainingportal/tree/master/static/services/training.png" />
          <h2>Employee Training</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
        <img src="https://github.com/sydhsn/trainingportal/tree/master/static/services/training.png" />
          <h2>Student Training</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
        <img src="https://github.com/sydhsn/trainingportal/tree/master/static/services/training.png" />
          <h2>Online Project</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
        <img src="https://github.com/sydhsn/trainingportal/tree/master/static/services/training.png" />
          <h2>Class Room Training</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .services {
        max-width: 1000px;
        margin: 0 auto;
      }
      .services-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .services .item {
        padding: 20px;
        margin-bottom: 40px;
        width: 50%;
      }
      img {
        max-width: 100%;
      }
      h2 {
        margin: 0 0 5px 0;
      }
      p {
        font-size: 18px;
        color: #777;
      }
      @media (max-width: 600px) {
        .services .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout>
);

export default Training;
