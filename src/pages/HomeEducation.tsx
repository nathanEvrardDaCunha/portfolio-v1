//TODO: Optimize images with WebP for LightHouse
import UIHeading2 from '../components/ui/headings/UIHeading2';
import UITimelineLogo from '../components/blocks/timeline/UITimelineLogo';
import esgiLogo from '../images/esgi_logo.jpg';
import UIOutsideList from '../components/ui/lists/UIOutsideList';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';
import UILightParagraph from '../components/ui/paragraphs/UILightParagraph';
import UIHeading3 from '../components/ui/headings/UIHeading3';
import UISmallLightTime from '../components/ui/paragraphs/UISmallLightTime';
import UISmallLightParagraph from '../components/ui/paragraphs/UISmallLightParagraph';

const HomeEducation = () => {
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <UIHeading2 className="mb-8">Degrees and training</UIHeading2>

            <div className="relative flex flex-col gap-8">
                <div className="absolute top-0 bottom-0 left-10 w-0.5 bg-neutral-300 dark:bg-neutral-600"></div>

                <div className="flex flex-col gap-8 rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-4 shadow-sm hover:bg-neutral-200">
                    <article className="flex flex-row gap-8">
                        <a href="https://www.esgi.fr/" className="z-10 aspect-square h-12 w-12" target="_blank">
                            <UITimelineLogo
                                src={esgiLogo}
                                alt={'ESGI school logo.'}
                                loading={'eager'}
                                fetchPriority={'high'}
                                width={48}
                                height={48}
                            />
                        </a>

                        <div className="flex flex-col">
                            <div className="flex flex-row gap-1">
                                <UISmallLightTime dateTime="2021-09">09/2021</UISmallLightTime>
                                <UISmallLightParagraph>-</UISmallLightParagraph>
                                <UISmallLightTime dateTime="2024-09">09/2024</UISmallLightTime>
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
