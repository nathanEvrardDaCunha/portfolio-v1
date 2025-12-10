import HomeEducation from './HomeEducation';
import HomeHero from './HomeHero';
import HomeProjects from './HomeProjects';
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

            {/* TODO: Create a "Tech Stack" section with a lsit of each technology I use with their name and respective brand logo. */}

            <HomeEducation />

            <HomeProjects />

            {/* TODO: Add footer with copyright and automatic-up-to-date expiring date */}
        </>
    );
};

export default Home;
