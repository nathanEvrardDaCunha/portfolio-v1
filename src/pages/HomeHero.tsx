const HomeHero = () => {
    // TODO: Make strong word pop visually

    return (
        <section>
            <h1>Welcome, Nathan's here.</h1>

            <p>23 years old frontend developper from France 🇫🇷</p>

            <p>
                Specialized in the <strong>JavaScript</strong> ecosystem. I build <strong>Frontend</strong> (and
                sometimes Fullstack) apps with <strong>TypeScript</strong> and <strong>React</strong>.
            </p>

            {/* TODO: Make this link look like a button. */}
            {/* TODO: Redirect to a .pdf page where my resume reside. */}
            {/* TODO: Create a resume without any job title but only the relevant informations. */}
            {/* TODO: Add download icon to this button. */}
            <a href="#">Resume</a>

            {/* TODO: Redirect to my up to date LinkedIn page. */}
            {/* TODO: TODO: Replace the link texts with the LinkedIn icon. */}
            <a href="#">Li</a>

            {/* TODO: Redirect to my up to date LinkedIn page. */}
            {/* TODO: TODO: Replace the link texts with the Github icon. */}
            <a href="#">Gi</a>

            {/* TODO: Redirect to my up to date LinkedIn page. */}
            {/* TODO: TODO: Replace the link texts with a mail icon. */}
            <a href="#">Ma</a>
        </section>
    );
};

export default HomeHero;
