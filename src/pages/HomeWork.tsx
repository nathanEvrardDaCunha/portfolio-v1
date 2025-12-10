const HomeWork = () => {
    // TODO: When the user click on the company where I work, redirect it (always in a new tab) to the official website of my previous employer.
    // TODO: Match the work description of each job with the work description on my portfolio
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <h2 className="mb-8 text-2xl font-bold text-neutral-950 dark:text-neutral-50">Work</h2>

            <div className="flex flex-col gap-8">
                <article className="flex flex-row gap-8">
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    <img
                        src="https://picsum.photos/46"
                        alt="Alt img"
                        className="aspect-square h-fit w-fit rounded-lg"
                    />

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                            <time dateTime="YYYY-MM-DD" className="text-[12px] text-neutral-700 dark:text-neutral-300">
                                YYYY-MM-DD
                            </time>
                            <p className="text-[12px] text-neutral-700">-</p>
                            <time dateTime="YYYY-MM-DD" className="text-[12px] text-neutral-700 dark:text-neutral-300">
                                YYYY-MM-DD
                            </time>
                        </div>

                        <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">Company Name</h3>

                        <p className="text-base text-neutral-700 dark:text-neutral-300">
                            Job Title (Type Of Contract - ex: Intern)
                        </p>

                        <ul className="flex list-inside list-disc flex-col">
                            <li>Mission number 1 was about X.</li>
                            <li>Mission number 1 was about X.</li>
                            <li>Mission number 1 was about X.</li>
                        </ul>
                    </div>
                </article>

                <article className="flex flex-row gap-8">
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    <img
                        src="https://picsum.photos/46"
                        alt="Alt img"
                        className="aspect-square h-fit w-fit rounded-lg"
                    />

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                            <time dateTime="YYYY-MM-DD" className="text-[12px] text-neutral-700 dark:text-neutral-300">
                                YYYY-MM-DD
                            </time>
                            <p className="text-[12px] text-neutral-700">-</p>
                            <time dateTime="YYYY-MM-DD" className="text-[12px] text-neutral-700 dark:text-neutral-300">
                                YYYY-MM-DD
                            </time>
                        </div>

                        <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">Company Name</h3>

                        <p className="text-base text-neutral-700 dark:text-neutral-300">
                            Job Title (Type Of Contract - ex: Intern)
                        </p>

                        <ul className="flex list-inside list-disc flex-col">
                            <li>Mission number 1 was about X.</li>
                            <li>Mission number 1 was about X.</li>
                            <li>Mission number 1 was about X.</li>
                        </ul>
                    </div>
                </article>

                <article className="flex flex-row gap-8">
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    <img
                        src="https://picsum.photos/46"
                        alt="Alt img"
                        className="aspect-square h-fit w-fit rounded-lg"
                    />

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                            <time dateTime="YYYY-MM-DD" className="text-[12px] text-neutral-700 dark:text-neutral-300">
                                YYYY-MM-DD
                            </time>
                            <p className="text-[12px] text-neutral-700">-</p>
                            <time dateTime="YYYY-MM-DD" className="text-[12px] text-neutral-700 dark:text-neutral-300">
                                YYYY-MM-DD
                            </time>
                        </div>

                        <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">Company Name</h3>

                        <p className="text-base text-neutral-700 dark:text-neutral-300">
                            Job Title (Type Of Contract - ex: Intern)
                        </p>

                        <ul className="flex list-inside list-disc flex-col">
                            <li>Mission number 1 was about X.</li>
                            <li>Mission number 1 was about X.</li>
                            <li>Mission number 1 was about X.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default HomeWork;
