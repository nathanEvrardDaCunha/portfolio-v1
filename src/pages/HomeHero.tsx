import { FileDown, Mail } from 'lucide-react';
import UILinkedInIcon from '../components/icons/UILinkedInIcon';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';
import protraitImage from '../../src/images/portrait.jpg';
import UIImage from '../components/ui/UIImage';
import UIHeading2 from '../components/ui/headings/UIHeading2';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';

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
                        Specialized in the <strong className="font-black text-blue-700">JavaScript</strong> ecosystem. I
                        build frontend (and sometimes fullstack) applications with{' '}
                        <strong className="font-black text-blue-700">TypeScript</strong> and{' '}
                        <strong className="font-black text-blue-700">React</strong>.
                    </UIParagraph>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        {/* TODO: Make this link look like a button. */}
                        {/* TODO: Redirect to a .pdf page where my resume reside. */}
                        {/* TODO: Create a resume without any job title but only the relevant informations. */}
                        {/* TODO: Add download icon to this button. */}
                        <a
                            href="#"
                            target="_blank"
                            className="flex w-fit flex-row items-center gap-3 rounded-sm border border-neutral-300 bg-neutral-50 px-4 py-2 shadow-sm hover:bg-neutral-200"
                        >
                            <UIParagraph>Resume</UIParagraph>
                            <FileDown className="h-4 w-4 text-neutral-950" />
                        </a>

                        <div className="flex flex-row gap-4">
                            <a href="https://www.linkedin.com/in/nathan-evrard/" target="_blank">
                                <UILinkedInIcon className="h-5 w-5 text-neutral-950 hover:text-neutral-700" />
                            </a>
                            <a href="https://github.com/nathanEvrardDaCunha" target="_blank">
                                <UIGitHubIcon className="h-5 w-5 text-neutral-950 hover:text-neutral-700" />
                            </a>

                            <a href="mailto:nathan.evrarddacunha@proton.me" target="_blank">
                                <Mail strokeWidth={2} className="h-5 w-5 text-neutral-950 hover:text-neutral-700" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
