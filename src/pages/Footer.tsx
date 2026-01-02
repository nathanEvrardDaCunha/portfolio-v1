import { Mail } from 'lucide-react';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';
import UILinkedInIcon from '../components/icons/UILinkedInIcon';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';
import UILink from '../components/ui/UILink';

const Footer = () => {
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <div className="flex flex-col justify-between border-t border-neutral-300 pt-12 sm:flex-row dark:border-neutral-700">
                <UIParagraph className="mb-4">© {new Date().getFullYear()}nathan-evrard .fr</UIParagraph>

                <div className="flex flex-row gap-4">
                    <UILink href={'https://www.linkedin.com/in/nathan-evrard/'} className="group">
                        <UILinkedInIcon
                            className={
                                'h-5 w-5 text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                            }
                        />
                    </UILink>
                    <UILink href={'https://github.com/nathanEvrardDaCunha'} className="group">
                        <UIGitHubIcon
                            className={
                                'h-5 w-5 text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                            }
                        />
                    </UILink>

                    <UILink href={'mailto:nathan.evrarddacunha@proton.me'} className="group">
                        <Mail
                            strokeWidth={2}
                            className={
                                'h-5 w-5 text-neutral-950 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-neutral-700 hover:scale-110 hover:text-neutral-700 dark:text-neutral-50 dark:group-focus:text-neutral-300 dark:hover:text-neutral-300'
                            }
                        />
                    </UILink>
                </div>
            </div>
        </section>
    );
};

export default Footer;
