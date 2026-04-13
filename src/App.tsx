import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import FeaturedProjects from './sections/FeaturedProjects';
import SelectedProjects from './sections/SelectedProjects';
import Certifications from './sections/Certifications';
import WorkExperience from './sections/WorkExperience';
// import Activities from './sections/Activities';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <SelectedProjects />
        <Certifications />
        <WorkExperience />
        {/* <Activities /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
