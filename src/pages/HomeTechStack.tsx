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
import UITechCategory from '../components/blocks/tech-stack/UITechCategory';
import UITechs from '../components/blocks/tech-stack/UITechs';
import UITech from '../components/blocks/tech-stack/UITech';

const HomeTechStack = () => {
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <UIHeading2 className="mb-8">Tech Stack</UIHeading2>

            <div className="mb-8 flex flex-col gap-4">
                <UITechCategory>Front End</UITechCategory>

                <UITechs>
                    <UITech>
                        <UIReactIcon />
                        <p>React</p>
                    </UITech>

                    <UITech>
                        <UITypeScriptIcon />
                        <p>TypeScript</p>
                    </UITech>

                    <UITech>
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </UITech>

                    <UITech>
                        <UITailwindCSSIcon />
                        <p>Tailwind CSS</p>
                    </UITech>

                    <UITech>
                        <UISassIcon />
                        <p>SASS/SCSS</p>
                    </UITech>

                    <UITech>
                        <UIHtmlIcon />
                        <p>HTML5</p>
                    </UITech>

                    <UITech>
                        <UICssIcon />
                        <p>CSS3</p>
                    </UITech>

                    <UITech>
                        <MonitorSmartphone strokeWidth={1.5} />
                        <p>Responsive Design</p>
                    </UITech>

                    <UITech>
                        <Accessibility strokeWidth={1.5} />
                        <p>Accessibility</p>
                    </UITech>
                </UITechs>
            </div>

            <div className="mb-8 flex flex-col gap-4">
                <UITechCategory>Back End</UITechCategory>

                <UITechs>
                    <UITech>
                        <UINodeIcon />
                        <p>Node.js</p>
                    </UITech>

                    <UITech>
                        <UIExpressIcon />
                        <p>Express</p>
                    </UITech>

                    <UITech>
                        <ServerCog strokeWidth={1.5} />
                        <p>API RESTful</p>
                    </UITech>

                    <UITech>
                        <UIPostgreSQLIcon />
                        <p>PostgreSQL</p>
                    </UITech>

                    <UITech>
                        <UIMySQLIcon />
                        <p>MySQL</p>
                    </UITech>

                    <UITech>
                        <Database strokeWidth={1.5} />
                        <p>SQL</p>
                    </UITech>
                </UITechs>
            </div>

            <div className="flex flex-col gap-4">
                <UITechCategory>Tools</UITechCategory>

                <UITechs>
                    <UITech>
                        <UIGitIcon />
                        <p>Git</p>
                    </UITech>

                    <UITech>
                        <UIGitHubIcon />
                        <p>GitHub</p>
                    </UITech>

                    <UITech>
                        <UIDockerIcon />
                        <p>Docker</p>
                    </UITech>

                    <UITech>
                        <UILinuxIcon />
                        <p>Linux</p>
                    </UITech>
                </UITechs>
            </div>
        </section>
    );
};

export default HomeTechStack;
