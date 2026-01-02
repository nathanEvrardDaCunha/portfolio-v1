import { Globe } from 'lucide-react';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';
import quickTaskDesktop from '../images/quick-task-desktop.png';
import crisalieDesktop from '../images/crisalie-desktop.png';
import UIHeading2 from '../components/ui/headings/UIHeading2';
import UIImage from '../components/ui/UIImage';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';
import UISmallParagraph from '../components/ui/paragraphs/UISmallParagraph';
import UILightParagraph from '../components/ui/paragraphs/UILightParagraph';
import UIHeading3 from '../components/ui/headings/UIHeading3';

const HomeProjects = () => {
    return (
        <section className="mx-auto max-w-3xl scroll-mt-24 px-8 pb-16" id="projects-anchor">
            <UIHeading2 className="mb-8">Featured projects</UIHeading2>

            <div className="flex flex-row flex-wrap gap-4">
                <article className="0 flex min-w-3xs flex-1 flex-col rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-4 shadow-md dark:border-neutral-700 dark:bg-neutral-950">
                    <UIImage
                        src={crisalieDesktop}
                        alt="Showcase of the home hero section of the volunteering showcase site of Cris'Alie."
                        className="mb-8 h-48 w-full object-cover"
                        loading={'lazy'}
                        fetchPriority={'auto'}
                        width={460}
                        height={192}
                    />

                    <div className="flex flex-col">
                        <UIHeading3>Cris'Alie Showcase Site</UIHeading3>

                        <UILightParagraph className="mb-6">Volunteering</UILightParagraph>

                        <UIParagraph className="mb-6">
                            Design, build and put into production from A to Z the showcase site of Cris'Alie, a Narbonne
                            sales shop, to make them visible online.
                        </UIParagraph>

                        <ul className="mb-6 flex flex-row flex-wrap gap-1">
                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>React</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>TypeScript</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>JavaScript</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>Tailwind CSS</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>HTML5</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>CSS3</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>Responsive Design</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>Accessibility</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>Git</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>GitHub</UISmallParagraph>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto flex flex-row gap-2">
                        <a
                            href="https://www.crisalie.fr/"
                            target="_blank"
                            className={
                                'flex flex-row items-center gap-2 rounded-lg bg-neutral-950 px-2 py-1 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-neutral-700 focus:scale-110 focus:bg-neutral-700 dark:bg-neutral-50 dark:hover:bg-neutral-300 dark:focus:bg-neutral-300'
                            }
                        >
                            <Globe strokeWidth={2} className="h-4 w-4 text-neutral-50 dark:text-neutral-950" />
                            <UISmallParagraph className="text-neutral-50 dark:text-neutral-950">
                                Website
                            </UISmallParagraph>
                        </a>
                    </div>
                </article>

                <article className="0 flex min-w-3xs flex-1 flex-col rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-4 shadow-md dark:border-neutral-700 dark:bg-neutral-950">
                    <UIImage
                        src={quickTaskDesktop}
                        alt="Showcase of the inteface panel of the personal task manager project named QuickTask."
                        className="mb-8 h-48 w-full object-cover"
                        loading={'lazy'}
                        fetchPriority={'auto'}
                        width={460}
                        height={192}
                    />

                    <div className="flex flex-col">
                        <UIHeading3>Online Task Manager</UIHeading3>

                        <UILightParagraph className="mb-6">Personal</UILightParagraph>

                        <UIParagraph className="mb-6">
                            Develop and put online a Full Stack task manager, suitable for visually impaired people and
                            with secure authentication.
                        </UIParagraph>

                        <ul className="mb-6 flex flex-row flex-wrap gap-1">
                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>React</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>TypeScript</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>JavaScript</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>SASS/SCSS</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>HTML5</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>CSS3</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>Responsive Design</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>Accessibility</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>Git</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>GitHub</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>Node.js</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>Express</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>API RESTful</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>PostgreSQL</UISmallParagraph>
                            </li>

                            <li className="rounded-lg bg-neutral-300 px-2 py-1 dark:bg-neutral-700">
                                <UISmallParagraph>SQL</UISmallParagraph>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto flex flex-row gap-2">
                        <a
                            href="https://quicktasks.up.railway.app/"
                            target="_blank"
                            className={
                                'flex flex-row items-center gap-2 rounded-lg bg-neutral-950 px-2 py-1 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-neutral-700 focus:scale-110 focus:bg-neutral-700 dark:bg-neutral-50 dark:hover:bg-neutral-300 dark:focus:bg-neutral-300'
                            }
                        >
                            <Globe strokeWidth={2} className="h-4 w-4 text-neutral-50 dark:text-neutral-950" />
                            <UISmallParagraph className="text-neutral-50 dark:text-neutral-950">
                                Website
                            </UISmallParagraph>
                        </a>

                        <a
                            href="https://github.com/nathanEvrardDaCunha/quickTasks_front"
                            target="_blank"
                            className={
                                'flex flex-row items-center gap-2 rounded-lg bg-neutral-950 px-2 py-1 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-neutral-700 focus:scale-110 focus:bg-neutral-700 dark:bg-neutral-50 dark:hover:bg-neutral-300 dark:focus:bg-neutral-300'
                            }
                        >
                            <UIGitHubIcon className="h-4 w-4 text-neutral-50 dark:text-neutral-950" />
                            <UISmallParagraph className="text-neutral-50 dark:text-neutral-950">
                                GitHub
                            </UISmallParagraph>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default HomeProjects;
