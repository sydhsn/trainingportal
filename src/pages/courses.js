import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const Courses = () => {
  const images = [];
  const imageCount = 14;

  for (let i = imageCount; i > 0; i--) {
    images.push(`https://github.com/sydhsn/trainingportal/tree/master/static/static/portfolio/${i}.jpg`);
  }

  return (
    <Layout title="Courses">
      <h1>Courses</h1>
      <Gallery images={images} />
      <p>Lorem ipsum was purposefully designed to have no meaning, but appear like real text, making it the perfect placeholder.</p>
    </Layout>
  );
};

export default Courses;
