//TODO: Optimize images with WebP for LightHouse
import UIHeading2 from '../components/ui/headings/UIHeading2';
import UITimelineDate from '../components/blocks/timeline/UITimelineDate';
import UITimelineLogo from '../components/blocks/timeline/UITimelineLogo';
import esgiLogo from '../images/esgi_logo.jpg';
import UIOutsideList from '../components/ui/lists/UIOutsideList';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';
import UILightParagraph from '../components/ui/paragraphs/UILightParagraph';
import UIHeading3 from '../components/ui/headings/UIHeading3';

const HomeEducation = () => {
    // TODO: When the user click on the company where I work, redirect it (always in a new tab) to the official website of my previous employer.
    // TODO: Match the work description of each job with the work description on my portfolio

    // TODO: Tweak image loading strategy and priority to enhance Lighthouse score.
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <UIHeading2 className="mb-8">Degrees and training</UIHeading2>

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

                            <UIHeading3>Higher School of Computer Genius (ESGI) of Paris</UIHeading3>

                            <UILightParagraph className="mb-4">Software and network project manager</UILightParagraph>

                            <UIOutsideList>
                                <li>
                                    <UIParagraph>
                                        Full-stack development with TypeScript, React, Node.js and Express.
                                    </UIParagraph>
                                </li>
                                <li>
                                    <UIParagraph>
                                        Relational databases: design, querying and administration (SQL, PostgreSQL,
                                        MySQL).
                                    </UIParagraph>
                                </li>
                                <li>
                                    <UIParagraph>
                                        DevOps and collaboration: containerisation (Docker), versioning (Git, GitHub).
                                    </UIParagraph>
                                </li>
                            </UIOutsideList>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default HomeEducation;
