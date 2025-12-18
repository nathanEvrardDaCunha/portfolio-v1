import { Globe } from 'lucide-react';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';

//TODO: Optimize images with WebP for LightHouse
import quickTaskDesktop from '../images/quick-task-desktop.png';
import crisalieDesktop from '../images/crisalie-desktop.png';

const HomeProjects = () => {
    // TODO: Showcase Cris'Alie website and emphasize it's a for professional purpose.
    // TODO: Showcase this portfolio and include the Githup repository link.
    // TODO: Showcase my fullstack task-manager "QuickTasks" and include the Githup repository link and the link to the live demo.
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <h2 className="mb-8 text-2xl font-bold text-neutral-950 dark:text-neutral-50">Featured projects</h2>

            <div className="flex flex-row flex-wrap gap-4">
                <article className="flex min-w-3xs flex-1 flex-col rounded-sm border border-neutral-300 p-8 shadow-md">
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    {/* TODO: Display the image in full when clicked. */}
                    <img src={crisalieDesktop} alt="Alt img" className="mb-8 h-48 w-full object-cover" />

                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
                            Cris'Alie Showcase Site
                        </h3>

                        <strong className="mb-6 text-base font-normal text-neutral-700 dark:text-neutral-300">
                            Volunteering
                        </strong>

                        <p className="mb-6 text-base font-medium text-neutral-950 dark:text-neutral-50">
                            Design, build and put into production from A to Z the showcase site of Cris'Alie, a Narbonne
                            sales shop, to make them visible online.
                        </p>

                        <ul className="mb-6 flex flex-row flex-wrap gap-1">
                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">React</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">TypeScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">JavaScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Tailwind CSS</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">HTML5</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">CSS3</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Responsive Design</p>
                            </li>

                            {/* TODO: Also add SEO tag in project and Tech Stack for performances reasons (like Lighthouse) or is it too much ? */}
                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Accessibility</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Git</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">GitHub</p>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto flex flex-row gap-2">
                        {/* TODO: Make sure the link is the right one when Cris'Alie will finally be in production. */}
                        <a
                            href="https://crisalie.com"
                            target="_blank"
                            className="flex flex-row items-center gap-2 rounded-sm bg-neutral-950 px-2 py-1 hover:bg-neutral-800"
                        >
                            <Globe strokeWidth={2} className="h-4 w-4 text-neutral-50" />
                            <p className="text-[12px] font-medium text-neutral-50">Website</p>
                        </a>
                    </div>
                </article>

                <article className="flex min-w-3xs flex-1 flex-col rounded-sm border border-neutral-300 p-8 shadow-md">
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    {/* TODO: Display the image in full when clicked. */}
                    <img src={quickTaskDesktop} alt="Alt img" className="mb-8 h-48 w-full object-cover" />

                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">Online Task Manager</h3>

                        <strong className="mb-6 text-base font-normal text-neutral-700 dark:text-neutral-300">
                            Personal
                        </strong>

                        <p className="mb-6 text-base font-medium text-neutral-950 dark:text-neutral-50">
                            Develop and put online a Full Stack task manager, suitable for visually impaired people and
                            with secure authentication.
                        </p>

                        <ul className="mb-6 flex flex-row flex-wrap gap-1">
                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">React</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">TypeScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">JavaScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">SASS/SCSS</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">HTML5</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">CSS3</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Responsive Design</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Accessibility</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Git</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">GitHub</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Node.js</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Express</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">API RESTful</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">PostgreSQL</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">SQL</p>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto flex flex-row gap-2">
                        {/* TODO: Add link to this project live demo if there's one. */}
                        <a
                            href="https://quicktasks.up.railway.app/"
                            target="_blank"
                            className="flex flex-row items-center gap-2 rounded-sm bg-neutral-950 px-2 py-1 hover:bg-neutral-800"
                        >
                            <Globe strokeWidth={2} className="h-4 w-4 text-neutral-50" />
                            <p className="text-[12px] font-medium text-neutral-50">Website</p>
                        </a>

                        {/* TODO: Add link to this project public Github repository if there's one. */}
                        <a
                            href="https://github.com/nathanEvrardDaCunha/quickTasks_front"
                            target="_blank"
                            className="flex flex-row items-center gap-2 rounded-sm bg-neutral-950 px-2 py-1 hover:bg-neutral-800"
                        >
                            <UIGitHubIcon className="h-4 w-4 text-neutral-50" />
                            <p className="text-[12px] font-medium text-neutral-50">GitHub</p>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default HomeProjects;
