import { Mail } from 'lucide-react';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';
import UILinkedInIcon from '../components/icons/UILinkedInIcon';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';

// flex  gap-4 sm:flex-row sm:items-center
const Footer = () => {
    return (
        // TODO: Change copyright website name when in production.
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <div className="flex flex-col justify-between border-t border-neutral-200 pt-12 sm:flex-row">
                <UIParagraph className="mb-4">© {new Date().getFullYear()} nathan-evrard.com</UIParagraph>

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
        </section>
    );
};

export default Footer;
