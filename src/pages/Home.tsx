import HomeEducation from './HomeEducation';
import HomeHero from './HomeHero';
import HomeProjects from './HomeProjects';
import HomeTechStack from './HomeTechStack';
import HomeWork from './HomeWork';

const Home = () => {
    // TODO: Use proper html semantic structure with <h1>, <h2>...
    // TODO: Make sure there is no language (ex: grammatical) errors/mistakes.
    // TODO: Match the education description of each job with the education description on my portfolio
    // TODO: Include my TOEIC cetification (even better if people can view it ?)
    // TODO: Include my OPQUAST cetification (even better if people can view it ?)

    return (
        <div className="bg-neutral-50 dark:bg-neutral-950">
            {/* TODO: Create a small header with a navbar to help keyboard user navigate the site more quickly. */}
            {/* TODO: Add switch light/dark mode in header. */}
            {/* TODO: Add toggle english/french mode in header ? */}
            {/* TODO: Make glass effect on header when hover other page elements ? */}

            <HomeHero />

            <HomeWork />

            <HomeEducation />

            <HomeTechStack />

            <HomeProjects />

            {/* TODO: Add footer with copyright and automatic-up-to-date expiring date */}
        </div>
    );
};

export default Home;
