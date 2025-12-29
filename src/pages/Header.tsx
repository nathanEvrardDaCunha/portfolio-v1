import ThemeToggle from '../components/ThemeToggle';
import UILightParagraph from '../components/ui/paragraphs/UILightParagraph';

// TODO: See if tabindex is needed for logical keyboard navigation or not.
const Header = () => {
    return (
        <section className="bg-opacity-0 m sticky top-0 z-20 bg-neutral-100/75 bg-clip-padding backdrop-blur-sm backdrop-filter dark:bg-neutral-900/75">
            <div className="mx-auto max-w-3xl px-8">
                <div className="flex flex-col justify-between gap-2 py-8 sm:flex-row">
                    <nav className="my-auto h-full w-full max-w-80">
                        <ul className="flew-row flex justify-between">
                            <li>
                                <a href="#work-anchor">
                                    <UILightParagraph className="text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300">
                                        Work
                                    </UILightParagraph>
                                </a>
                            </li>

                            <li>
                                <a href="#education-anchor">
                                    <UILightParagraph className="text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300">
                                        Education
                                    </UILightParagraph>
                                </a>
                            </li>

                            <li>
                                <a href="#stack-anchor">
                                    <UILightParagraph className="text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300">
                                        Stack
                                    </UILightParagraph>
                                </a>
                            </li>

                            <li>
                                <a href="#projects-anchor">
                                    <UILightParagraph className="text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300">
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
