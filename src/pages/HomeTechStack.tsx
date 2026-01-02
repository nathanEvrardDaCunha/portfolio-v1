import { Accessibility, Database, MonitorSmartphone, ServerCog } from 'lucide-react';
import UICssIcon from '../components/icons/UICssIcon';
import UIDockerIcon from '../components/icons/UIDockerIcon';
import UIExpressIcon from '../components/icons/UIExpressIcon';
import UIGitHubIcon from '../components/icons/UIGitHubIcon';
import UIGitIcon from '../components/icons/UIGitIcon';
import UIHtmlIcon from '../components/icons/UIHtmlIcon';
import UIJavaScriptIcon from '../components/icons/UIJavaScriptIcon';
import UILinuxIcon from '../components/icons/UILinuxIcon';
import UIMySQLIcon from '../components/icons/UIMySQLIcon';
import UINodeIcon from '../components/icons/UINodeIcon';
import UIPostgreSQLIcon from '../components/icons/UIPostgreSQLIcon';
import UIReactIcon from '../components/icons/UIReactIcon';
import UISassIcon from '../components/icons/UISassIcon';
import UITailwindCSSIcon from '../components/icons/UITailwindCSSIcon';
import UITypeScriptIcon from '../components/icons/UITypeScriptIcon';
import UIHeading2 from '../components/ui/headings/UIHeading2';
import UITechs from '../components/blocks/tech-stack/UITechs';
import UITech from '../components/blocks/tech-stack/UITech';
import UIHeading3 from '../components/ui/headings/UIHeading3';
import UIParagraph from '../components/ui/paragraphs/UIParagraph';

const HomeTechStack = () => {
    return (
        <section className="mx-auto max-w-3xl scroll-mt-24 px-8 pb-16" id="stack-anchor">
            <UIHeading2 className="mb-8">Tech Stack</UIHeading2>

            <div className="mb-8 flex flex-col gap-4">
                <UIHeading3>Front-End</UIHeading3>

                <UITechs>
                    <UITech>
                        <UIReactIcon />
                        <UIParagraph>React</UIParagraph>
                    </UITech>

                    <UITech>
                        <UITypeScriptIcon />
                        <UIParagraph>TypeScript</UIParagraph>
                    </UITech>

                    <UITech>
                        <UIJavaScriptIcon />
                        <UIParagraph>JavaScript</UIParagraph>
                    </UITech>

                    <UITech>
                        <UITailwindCSSIcon />
                        <UIParagraph>Tailwind CSS</UIParagraph>
                    </UITech>

                    <UITech>
                        <UISassIcon />
                        <UIParagraph>SASS/SCSS</UIParagraph>
                    </UITech>

                    <UITech>
                        <UIHtmlIcon />
                        <UIParagraph>HTML5</UIParagraph>
                    </UITech>

                    <UITech>
                        <UICssIcon />
                        <UIParagraph>CSS3</UIParagraph>
                    </UITech>

                    <UITech>
                        <MonitorSmartphone strokeWidth={1.5} className="text-neutral-950 dark:text-neutral-50" />
                        <UIParagraph>Responsive Design</UIParagraph>
                    </UITech>

                    <UITech>
                        <Accessibility strokeWidth={1.5} className="text-neutral-950 dark:text-neutral-50" />
                        <UIParagraph>Accessibility</UIParagraph>
                    </UITech>
                </UITechs>
            </div>

            <div className="mb-8 flex flex-col gap-4">
                <UIHeading3>Back-End</UIHeading3>

                <UITechs>
                    <UITech>
                        <UINodeIcon />
                        <UIParagraph>Node.js</UIParagraph>
                    </UITech>

                    <UITech>
                        <UIExpressIcon />
                        <UIParagraph>Express</UIParagraph>
                    </UITech>

                    <UITech>
                        <ServerCog strokeWidth={1.5} className="text-neutral-950 dark:text-neutral-50" />
                        <UIParagraph>API RESTful</UIParagraph>
                    </UITech>

                    <UITech>
                        <UIPostgreSQLIcon />
                        <UIParagraph>PostgreSQL</UIParagraph>
                    </UITech>

                    <UITech>
                        <UIMySQLIcon />
                        <UIParagraph>MySQL</UIParagraph>
                    </UITech>

                    <UITech>
                        <Database strokeWidth={1.5} className="text-neutral-950 dark:text-neutral-50" />
                        <UIParagraph>SQL</UIParagraph>
                    </UITech>
                </UITechs>
            </div>

            <div className="flex flex-col gap-4">
                <UIHeading3>Tools</UIHeading3>

                <UITechs>
                    <UITech>
                        <UIGitIcon />
                        <UIParagraph>Git</UIParagraph>
                    </UITech>

                    <UITech>
                        <UIGitHubIcon />
                        <UIParagraph>GitHub</UIParagraph>
                    </UITech>

                    <UITech>
                        <UIDockerIcon />
                        <UIParagraph>Docker</UIParagraph>
                    </UITech>

                    <UITech>
                        <UILinuxIcon />
                        <UIParagraph>Linux</UIParagraph>
                    </UITech>
                </UITechs>
            </div>
        </section>
    );
};

export default HomeTechStack;
