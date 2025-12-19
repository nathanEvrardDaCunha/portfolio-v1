//TODO: Optimize images with WebP for LightHouse
import UIHeading2 from '../components/ui/UIHeading2';
import UITimelineDate from '../components/ui/UITimelineDate';
import UITimelineLogo from '../components/ui/UITimelineLogo';
import UITimelineStatus from '../components/ui/UITimelineStatus';
import UITimelineTitle from '../components/ui/UITimelineTitle';
import esgiLogo from '../images/esgi_logo.jpg';

const HomeEducation = () => {
    // TODO: When the user click on the company where I work, redirect it (always in a new tab) to the official website of my previous employer.
    // TODO: Match the work description of each job with the work description on my portfolio

    // TODO: Tweak image loading strategy and priority to enhance Lighthouse score.
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <UIHeading2>Degrees and training</UIHeading2>

            <div className="relative flex flex-col gap-8">
                <div className="absolute top-0 bottom-0 left-10 w-0.5 bg-neutral-300 dark:bg-neutral-600"></div>

                <div className="flex flex-col gap-8 rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-4 shadow-sm hover:bg-neutral-200">
                    <article className="flex flex-row gap-8">
                        <UITimelineLogo
                            src={esgiLogo}
                            alt={'ESGI school logo.'}
                            loading={'eager'}
                            fetchPriority={'high'}
                            width={48}
                            height={48}
                        />

                        <div className="flex flex-col">
                            <div className="flex flex-row gap-1">
                                <UITimelineDate dateTime="2021-09">09/2021</UITimelineDate>
                                <p className="text-[12px] text-neutral-700">-</p>
                                <UITimelineDate dateTime="2024-09">09/2024</UITimelineDate>
                            </div>

                            <UITimelineTitle>Higher School of Computer Genius (ESGI) of Paris</UITimelineTitle>

                            <UITimelineStatus>Software and network project manager</UITimelineStatus>

                            <ul className="ml-4 flex list-outside list-disc flex-col">
                                <li>Full-stack development with TypeScript, React, Node.js and Express.</li>
                                <li>
                                    Relational databases: design, querying and administration (SQL, PostgreSQL, MySQL).
                                </li>
                                <li>DevOps and collaboration: containerisation (Docker), versioning (Git, GitHub).</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default HomeEducation;
