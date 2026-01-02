import ThemeToggle from '../components/ThemeToggle';
import UILightParagraph from '../components/ui/paragraphs/UILightParagraph';

const Header = () => {
    return (
        <section className="bg-opacity-0 m sticky top-0 z-20 bg-neutral-100/75 bg-clip-padding backdrop-blur-sm backdrop-filter dark:bg-neutral-900/75">
            <div className="mx-auto max-w-3xl px-8">
                <div className="flex flex-col justify-between gap-2 py-8 sm:flex-row">
                    <nav className="my-auto h-full w-full max-w-80">
                        <ul className="flew-row flex justify-between">
                            <li>
                                <a href="#work-anchor" className="group">
                                    <UILightParagraph
                                        className={
                                            'text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                                        }
                                    >
                                        Work
                                    </UILightParagraph>
                                </a>
                            </li>

                            <li>
                                <a href="#education-anchor" className="group">
                                    <UILightParagraph
                                        className={
                                            'text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                                        }
                                    >
                                        Education
                                    </UILightParagraph>
                                </a>
                            </li>

                            <li>
                                <a href="#stack-anchor" className="group">
                                    <UILightParagraph
                                        className={
                                            'text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                                        }
                                    >
                                        Stack
                                    </UILightParagraph>
                                </a>
                            </li>

                            <li>
                                <a href="#projects-anchor" className="group">
                                    <UILightParagraph
                                        className={
                                            'text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                                        }
                                    >
                                        Projects
                                    </UILightParagraph>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <ThemeToggle />
                </div>
            </div>
        </section>
    );
};

export default Header;
