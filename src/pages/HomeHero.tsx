const HomeHero = () => {
    // TODO: Make strong word pop visually

    return (
        <section className="mx-auto max-w-3xl px-8 py-16">
            <div className="flex flex-col gap-8">
                <div>
                    {/* TODO: Add clean image about myself */}
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    <img src="https://picsum.photos/200/260" alt="Alt img" />
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">Hi Nathan here.</h1>

                    <p className="text-base font-medium text-neutral-950 dark:text-neutral-50">
                        23 years old frontend developper from France 🇫🇷
                    </p>

                    {/* blue, fuchsia, gray, indigo, neutral */}
                    <p className="text-base font-medium text-neutral-950 dark:text-neutral-50">
                        Specialized in the <strong className="font-black text-blue-700">JavaScript</strong> ecosystem. I
                        build frontend (and sometimes fullstack) applications with{' '}
                        <strong className="font-black text-blue-700">TypeScript</strong> and{' '}
                        <strong className="font-black text-blue-700">React</strong>.
                    </p>

                    <div className="flex flex-row gap-8">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
