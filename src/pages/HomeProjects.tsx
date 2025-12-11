import { Globe } from 'lucide-react';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';

const HomeProjects = () => {
    // TODO: Showcase Cris'Alie website and emphasize it's a for professional purpose.
    // TODO: Showcase this portfolio and include the Githup repository link.
    // TODO: Showcase my fullstack task-manager "QuickTasks" and include the Githup repository link and the link to the live demo.
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <h2 className="mb-8 text-2xl font-bold text-neutral-950 dark:text-neutral-50">Featured projects</h2>

            <div className="flex flex-row flex-wrap gap-4">
                <article className="min-w-3xs flex-1 rounded-sm border border-neutral-300 p-8 shadow-md">
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    {/* TODO: Display the image in full when clicked. */}
                    <img src="https://picsum.photos/300/100" alt="Alt img" className="mb-8 max-h-48 min-h-32 w-full" />

                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">Project Name</h3>

                        <strong className="mb-6 text-base font-normal text-neutral-700 dark:text-neutral-300">
                            Type of Project (personal, professional...)
                        </strong>

                        <p className="mb-6 text-base font-medium text-neutral-950 dark:text-neutral-50">
                            This is the short yet compelling description of my amazing project summarizing in less than
                            4 sentences why it's increadible.
                        </p>

                        <ul className="mb-6 flex flex-row flex-wrap gap-1">
                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">JavaScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">TypeScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">React</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Tailwind CSS</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">JavaScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">TypeScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">React</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-row gap-2">
                        {/* TODO: Add link to this project live demo if there's one. */}
                        <a
                            href="#"
                            className="flex flex-row items-center gap-2 rounded-sm bg-neutral-950 px-2 py-1 hover:bg-neutral-800"
                        >
                            <Globe strokeWidth={2} className="h-4 w-4 text-neutral-50" />
                            <p className="text-[12px] font-medium text-neutral-50">Website</p>
                        </a>

                        {/* TODO: Add link to this project public Github repository if there's one. */}
                        <a
                            href="#"
                            className="flex flex-row items-center gap-2 rounded-sm bg-neutral-950 px-2 py-1 hover:bg-neutral-800"
                        >
                            <UIGitHubIcon className="h-4 w-4 text-neutral-50" />
                            <p className="text-[12px] font-medium text-neutral-50">GitHub</p>
                        </a>
                    </div>
                </article>

                <article className="min-w-3xs flex-1 rounded-sm border border-neutral-300 p-8 shadow-md">
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    {/* TODO: Display the image in full when clicked. */}
                    <img src="https://picsum.photos/300/100" alt="Alt img" className="mb-8 max-h-48 min-h-32 w-full" />

                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">Project Name</h3>

                        <strong className="mb-6 text-base font-normal text-neutral-700 dark:text-neutral-300">
                            Type of Project (personal, professional...)
                        </strong>

                        <p className="mb-6 text-base font-medium text-neutral-950 dark:text-neutral-50">
                            This is the short yet compelling description of my amazing project summarizing in less than
                            4 sentences why it's increadible.
                        </p>

                        <ul className="mb-6 flex flex-row flex-wrap gap-1">
                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">JavaScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">TypeScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">React</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Tailwind CSS</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">JavaScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">TypeScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">React</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-row gap-2">
                        {/* TODO: Add link to this project live demo if there's one. */}
                        <a
                            href="#"
                            className="flex flex-row items-center gap-2 rounded-sm bg-neutral-950 px-2 py-1 hover:bg-neutral-800"
                        >
                            <Globe strokeWidth={2} className="h-4 w-4 text-neutral-50" />
                            <p className="text-[12px] font-medium text-neutral-50">Website</p>
                        </a>

                        {/* TODO: Add link to this project public Github repository if there's one. */}
                        <a
                            href="#"
                            className="flex flex-row items-center gap-2 rounded-sm bg-neutral-950 px-2 py-1 hover:bg-neutral-800"
                        >
                            <UIGitHubIcon className="h-4 w-4 text-neutral-50" />
                            <p className="text-[12px] font-medium text-neutral-50">GitHub</p>
                        </a>
                    </div>
                </article>

                <article className="min-w-3xs flex-1 rounded-sm border border-neutral-300 p-8 shadow-md">
                    {/* TODO: Replace alt proper image description. */}
                    {/* TODO: Replace src with proper image. */}
                    {/* TODO: Tweak image loading strategy and priority to enhance Lighthouse score. */}
                    {/* TODO: Display the image in full when clicked. */}
                    <img src="https://picsum.photos/300/100" alt="Alt img" className="mb-8 max-h-48 min-h-32 w-full" />

                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">Project Name</h3>

                        <strong className="mb-6 text-base font-normal text-neutral-700 dark:text-neutral-300">
                            Type of Project (personal, professional...)
                        </strong>

                        <p className="mb-6 text-base font-medium text-neutral-950 dark:text-neutral-50">
                            This is the short yet compelling description of my amazing project summarizing in less than
                            4 sentences why it's increadible.
                        </p>

                        <ul className="mb-6 flex flex-row flex-wrap gap-1">
                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">JavaScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">TypeScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">React</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">Tailwind CSS</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">JavaScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">TypeScript</p>
                            </li>

                            <li className="rounded-sm bg-neutral-200 px-2 py-1">
                                <p className="text-[12px] font-medium text-neutral-950">React</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-row gap-2">
                        {/* TODO: Add link to this project live demo if there's one. */}
                        <a
                            href="#"
                            className="flex flex-row items-center gap-2 rounded-sm bg-neutral-950 px-2 py-1 hover:bg-neutral-800"
                        >
                            <Globe strokeWidth={2} className="h-4 w-4 text-neutral-50" />
                            <p className="text-[12px] font-medium text-neutral-50">Website</p>
                        </a>

                        {/* TODO: Add link to this project public Github repository if there's one. */}
                        <a
                            href="#"
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
