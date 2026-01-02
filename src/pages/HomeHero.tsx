import { FileDown, Mail } from 'lucide-react';
import UILinkedInIcon from '../components/icons/UILinkedInIcon';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';
import protraitImage from '../../src/images/portrait.jpg';
import UIImage from '../components/ui/UIImage';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';
import UIStrong from '../components/ui/paragraphs/UIStrong';
import EvrardNathanResume from '../documents/evrard-nathan-resume.pdf';
import UILink from '../components/ui/UILink';
import UIHeading1 from '../components/ui/headings/UIHeading1';

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
                    <UIHeading1>Hi Nathan here.</UIHeading1>

                    <UIParagraph>22 years old frontend developer from France 🇫🇷</UIParagraph>

                    <UIParagraph>
                        Specialized in the <UIStrong>JavaScript</UIStrong> ecosystem. I build front-end (and sometimes
                        full-stack) applications using <UIStrong>TypeScript</UIStrong> and <UIStrong>React</UIStrong>.
                    </UIParagraph>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <UILink
                            href={EvrardNathanResume}
                            className={
                                'flex w-fit flex-row items-center gap-3 rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2 shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:bg-neutral-300 focus:scale-110 focus:bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-950 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
                            }
                        >
                            <UIParagraph>Resume</UIParagraph>
                            <FileDown className="h-4 w-4 text-neutral-950 dark:text-neutral-50" />
                        </UILink>

                        <div className="flex flex-row gap-4">
                            <UILink href={'https://www.linkedin.com/in/nathan-evrard/'} className={'group'}>
                                <UILinkedInIcon
                                    className={
                                        'h-5 w-5 text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                                    }
                                />
                            </UILink>

                            <UILink href={'https://github.com/nathanEvrardDaCunha'} className={'group'}>
                                <UIGitHubIcon
                                    className={
                                        'h-5 w-5 text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                                    }
                                />
                            </UILink>

                            <UILink href={'mailto:nathan.evrarddacunha@proton.me'} className={'group'}>
                                <Mail
                                    strokeWidth={2}
                                    className={
                                        'h-5 w-5 text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                                    }
                                />
                            </UILink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
