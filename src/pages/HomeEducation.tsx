const HomeEducation = () => {
    // TODO: When the user click on the company where I work, redirect it (always in a new tab) to the official website of my previous employer.
    // TODO: Match the work description of each job with the work description on my portfolio
    return (
        <section>
            <h2>Education</h2>

            <article>
                {/* TODO: Replace alt proper image description. */}
                {/* TODO: Replace src with proper image. */}
                {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                <img src="https://picsum.photos/20" alt="Alt img" />
                <time dateTime="YYYY-MM-DD">YYYY-MM-DD</time>
                <p> - </p>
                <time dateTime="YYYY-MM-DD">YYYY-MM-DD</time>
                <h3>University Name of [Paris]</h3>
                <strong>[Diploma Type like Bachelor] in [Computer Science] in [Software Architecture]</strong>
                <ul>
                    <li>Highlight number 1 of my bachelor studies.</li>
                    <li>Highlight number 1 of my bachelor studies.</li>
                    <li>Highlight number 1 of my bachelor studies.</li>
                </ul>
            </article>
        </section>
    );
};

export default HomeEducation;
