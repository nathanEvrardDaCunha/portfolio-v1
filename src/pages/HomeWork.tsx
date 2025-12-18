//TODO: Optimize images with WebP for LightHouse
import adiosLogo from '../images/adios_logo.jpg';

const HomeWork = () => {
    // TODO: When the user click on the company where I work, redirect it (always in a new tab) to the official website of my previous employer.
    // TODO: Match the work description of each job with the work description on my portfolio
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <h2 className="mb-8 text-2xl font-bold text-neutral-950 dark:text-neutral-50">Professional experiences</h2>

            <div className="flex flex-col gap-8">
                <article className="flex flex-row gap-8">
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    <img src={adiosLogo} alt="Alt img" className="aspect-square h-12 w-12 rounded-lg" />

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-1">
                            <time dateTime="2022-02" className="text-[12px] text-neutral-700 dark:text-neutral-300">
                                February 2022
                            </time>
                            <p className="text-[12px] text-neutral-700">-</p>
                            <time dateTime="2022-05" className="text-[12px] text-neutral-700 dark:text-neutral-300">
                                May 2022
                            </time>
                        </div>

                        <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">Institut ADIOS</h3>

                        <p className="text-base text-neutral-700 dark:text-neutral-300">Internship as Web Developer</p>

                        <ul className="ml-4 flex list-outside list-disc flex-col">
                            <li>
                                Design of an automated workflow (Zapier, JavaScript scripts) reducing the operational
                                burden of the secretariat by 30%.
                            </li>

                            <li>
                                Development of an interactive form with Tally, improving user experience and completion
                                rate.
                            </li>

                            <li>
                                Visual redesign of WordPress articles and strategic integration of CTA to optimize
                                conversion.
                            </li>

                            <li>Mentorship of an intern on the company’s automation practices and workflows.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default HomeWork;
