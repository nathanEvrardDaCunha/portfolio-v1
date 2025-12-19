//TODO: Optimize images with WebP for LightHouse
import UIHeading2 from '../components/ui/UIHeading2';
import UITimelineDate from '../components/ui/UITimelineDate';
import UITimelineLogo from '../components/ui/UITimelineLogo';
import UITimelineTitle from '../components/ui/UITimelineTitle';
import adiosLogo from '../images/adios_logo.jpg';

const HomeWork = () => {
    // TODO: When the user click on the company where I work, redirect it (always in a new tab) to the official website of my previous employer.
    // TODO: Match the work description of each job with the work description on my portfolio

    // TODO: Standardize gap (ex: gap-4, gap-5...)
    // TODO: Standardize rounded (ex: rounded-sm, rounded-lg...)

    // TODO: Tweak image loading strategy and priority to enhance Lighthouse score.
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <UIHeading2>Professional experiences</UIHeading2>

            <div className="relative flex flex-col gap-8">
                <div className="absolute top-0 bottom-0 left-10 w-0.5 bg-neutral-300 dark:bg-neutral-600"></div>

                <div className="flex flex-col gap-8 rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-4 shadow-sm hover:bg-neutral-200">
                    <article className="flex flex-row gap-5">
                        <UITimelineLogo
                            src={adiosLogo}
                            alt={'Institut ADIOS business logo.'}
                            loading={'eager'}
                            fetchPriority={'high'}
                            width={48}
                            height={48}
                        />

                        <div className="flex flex-col">
                            <div className="flex flex-row gap-1">
                                <UITimelineDate dateTime="2022-02">02/2022</UITimelineDate>
                                <p className="text-[12px] text-neutral-700">-</p>
                                <UITimelineDate dateTime="2022-05">05/2022</UITimelineDate>
                            </div>

                            <UITimelineTitle>Institut ADIOS</UITimelineTitle>

                            <p className="mb-4 text-base text-neutral-700 dark:text-neutral-300">
                                Internship as Web Developer
                            </p>

                            <ul className="ml-4 flex list-outside list-disc flex-col">
                                <li>
                                    Design of an automated workflow (Zapier, JavaScript scripts) reducing the
                                    operational burden of the secretariat by 30%.
                                </li>

                                <li>
                                    Development of an interactive form with Tally, improving user experience and
                                    completion rate.
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
            </div>
        </section>
    );
};

export default HomeWork;
