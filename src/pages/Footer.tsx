import { Mail } from 'lucide-react';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';
import UILinkedInIcon from '../components/icons/UILinkedInIcon';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';
import UILink from '../components/ui/UILink';

const Footer = () => {
    return (
        // TODO: Change copyright website name when in production.
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <div className="flex flex-col justify-between border-t border-neutral-300 pt-12 sm:flex-row dark:border-neutral-700">
                <UIParagraph className="mb-4">© {new Date().getFullYear()} nathan-evrard.com</UIParagraph>

                <div className="flex flex-row gap-4">
                    <UILink href={'https://www.linkedin.com/in/nathan-evrard/'}>
                        <UILinkedInIcon className="h-5 w-5 text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300" />
                    </UILink>
                    <UILink href={'https://github.com/nathanEvrardDaCunha'}>
                        <UIGitHubIcon className="h-5 w-5 text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300" />
                    </UILink>

                    <UILink href={'mailto:nathan.evrarddacunha@proton.me'}>
                        <Mail
                            strokeWidth={2}
                            className="h-5 w-5 text-neutral-950 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300"
                        />
                    </UILink>
                </div>
            </div>
        </section>
    );
};

export default Footer;
