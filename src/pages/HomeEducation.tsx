import UIHeading2 from '../components/ui/headings/UIHeading2';
import UITimelineLogo from '../components/blocks/timeline/UITimelineLogo';
import esgiLogo from '../images/optimized/esgi_logo.webp';
import UIOutsideList from '../components/ui/lists/UIOutsideList';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';
import UILightParagraph from '../components/ui/paragraphs/UILightParagraph';
import UIHeading3 from '../components/ui/headings/UIHeading3';
import UISmallLightTime from '../components/ui/paragraphs/UISmallLightTime';
import UISmallLightParagraph from '../components/ui/paragraphs/UISmallLightParagraph';
import UILink from '../components/ui/UILink';
import UIStrong from '../components/ui/paragraphs/UIStrong';

const HomeEducation = () => {
    return (
        <section className="mx-auto max-w-3xl scroll-mt-24 px-8 pb-16" id="education-anchor">
            <UIHeading2 className="mb-8">Degrees and training</UIHeading2>

            <div className="relative flex flex-col gap-8">
                <div className="absolute top-0 bottom-0 left-10 w-0.5 bg-neutral-300 dark:bg-neutral-700"></div>

                <div className="flex flex-col gap-8 rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-4 shadow-md dark:border-neutral-700 dark:bg-neutral-950">
                    <article className="flex flex-row gap-8">
                        <UILink
                            href={'https://www.esgi.fr/'}
                            className="group z-10 aspect-square h-12 w-12 transition-all duration-300 ease-in-out hover:scale-110 focus:scale-110"
                        >
                            <UITimelineLogo
                                src={esgiLogo}
                                alt={'Business logo for ESGI school.'}
                                loading={'eager'}
                                fetchPriority={'high'}
                                width={48}
                                height={48}
                                className={
                                    'transition-all duration-300 ease-in-out group-focus:opacity-85 hover:opacity-85'
                                }
                            />
                        </UILink>

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
                                        <UIStrong>Full-stack architecture :</UIStrong> Mastery of the TypeScript
                                        ecosystem with dynamic interfaces (React) and servers (Node.js/Express).
                                    </UIParagraph>
                                </li>

                                <li>
                                    <UIParagraph>
                                        <UIStrong>Data engineering :</UIStrong> Design, administration and querying of
                                        relational databases (PostgreSQL, MySQL).
                                    </UIParagraph>
                                </li>

                                <li>
                                    <UIParagraph>
                                        <UIStrong>DevOps & Collaborative culture :</UIStrong> Versioning (Git/GitHub)
                                        and setting up isolated environments with Docker.
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
