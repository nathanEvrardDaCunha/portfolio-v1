import HomeEducation from './HomeEducation';
import HomeHero from './HomeHero';
import HomeWork from './HomeWork';

const Home = () => {
    // TODO: Use proper html semantic structure with <h1>, <h2>...
    // TODO: Make sure there is no language (ex: grammatical) errors/mistakes.
    // TODO: Match the education description of each job with the education description on my portfolio
    // TODO: Include my TOEIC cetification (even better if people can view it ?)
    // TODO: Include my OPQUAST cetification (even better if people can view it ?)

    return (
        <>
            <HomeHero />

            <HomeWork />

            <HomeEducation />
        </>
    );
};

export default Home;
