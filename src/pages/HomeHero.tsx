import { FileDown, Mail } from 'lucide-react';
import UILinkedInIcon from '../components/icons/UILinkedInIcon';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';
import protraitImage from '../../src/images/portrait.jpg';
import UIImage from '../components/ui/UIImage';
import UIHeading2 from '../components/ui/headings/UIHeading2';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';
import UIStrong from '../components/ui/paragraphs/UIStrong';
import EvrardNathanResume from '../documents/evrard-nathan-resume.pdf';

// To put in one file:
// TODO: Search border-neutral and standardize them.

const HomeHero = () => {
    return (
        <section className="mx-auto max-w-3xl px-8 py-16">
            <div className="flex flex-col gap-8 sm:flex-row-reverse">
                <UIImage
                    src={protraitImage}
                    alt="Portrait of EVRARD Nathan."
                    className="aspect-auto h-64 w-fit rounded-lg"
                    loading={'eager'}
                    fetchPriority={'high'}
                    width={192}
                    height={256}
                />

                <div className="flex flex-col gap-5">
                    <UIHeading2>Hi Nathan here.</UIHeading2>

                    <UIParagraph>22 years old frontend developper from France 🇫🇷</UIParagraph>

                    <UIParagraph>
                        Specialized in the <UIStrong>JavaScript</UIStrong> ecosystem. I build frontend (and sometimes
                        fullstack) applications with <UIStrong>TypeScript</UIStrong> and <UIStrong>React</UIStrong>.
                    </UIParagraph>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        {/* TODO: Redirect to a .pdf page where my resume reside. */}
                        {/* TODO: Create a resume without any job title but only the relevant informations. */}
                        {/* TODO: Create UIButtonIcon and UIHollowButtonIcon ? */}
                        <a
                            href={EvrardNathanResume}
                            target="_blank"
                            className="flex w-fit flex-row items-center gap-3 rounded-sm border border-neutral-300 bg-neutral-50 px-4 py-2 shadow-sm hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                            download
                        >
                            <UIParagraph>Resume</UIParagraph>
                            <FileDown className="h-4 w-4 text-neutral-950 dark:text-neutral-50" />
                        </a>

                        <div className="flex flex-row gap-4">
                            <a href="https://www.linkedin.com/in/nathan-evrard/" target="_blank">
                                <UILinkedInIcon className="h-5 w-5 text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300" />
                            </a>
                            <a href="https://github.com/nathanEvrardDaCunha" target="_blank">
                                <UIGitHubIcon className="h-5 w-5 text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300" />
                            </a>

                            <a href="mailto:nathan.evrarddacunha@proton.me" target="_blank">
                                <Mail
                                    strokeWidth={2}
                                    className="h-5 w-5 text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
