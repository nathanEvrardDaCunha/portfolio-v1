import Footer from './Footer';
import Header from './Header';
import HomeEducation from './HomeEducation';
import HomeHero from './HomeHero';
import HomeProjects from './HomeProjects';
import HomeTechStack from './HomeTechStack';
import HomeWork from './HomeWork';

const Home = () => {
    // TODO: Use proper html semantic structure with <h1>, <h2>...

    return (
        <div className="bg-neutral-100 dark:bg-neutral-900">
            {/* TODO: Add toggle english/french mode in header ? */}

            <Header />

            <HomeHero />

            <HomeWork />

            <HomeEducation />

            <HomeTechStack />

            <HomeProjects />

            <Footer />
        </div>
    );
};

export default Home;
