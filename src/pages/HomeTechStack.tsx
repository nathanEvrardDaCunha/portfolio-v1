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
import UIHeading2 from '../components/ui/UIHeading2';
import UITechCategory from '../components/ui/UITechCategory';

const HomeTechStack = () => {
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <UIHeading2>Tech Stack</UIHeading2>

            <div className="mb-8 flex flex-col gap-4">
                <UITechCategory>Front End</UITechCategory>

                <ul className="flex flex-row flex-wrap gap-6">
                    <li className="flex flex-row gap-3">
                        <UIReactIcon />
                        <p>React</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UITypeScriptIcon />
                        <p>TypeScript</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UITailwindCSSIcon />
                        <p>Tailwind CSS</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UISassIcon />
                        <p>SASS/SCSS</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UIHtmlIcon />
                        <p>HTML5</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UICssIcon />
                        <p>CSS3</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <MonitorSmartphone strokeWidth={1.5} />
                        <p>Responsive Design</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <Accessibility strokeWidth={1.5} />
                        <p>Accessibility</p>
                    </li>
                </ul>
            </div>

            <div className="mb-8 flex flex-col gap-4">
                <UITechCategory>Back End</UITechCategory>

                <ul className="flex flex-row flex-wrap gap-6">
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
                        <p>Node.js</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UIExpressIcon />
                        <p>Express</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <ServerCog strokeWidth={1.5} />
                        <p>API RESTful</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UIPostgreSQLIcon />
                        <p>PostgreSQL</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UIMySQLIcon />
                        <p>MySQL</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <Database strokeWidth={1.5} />
                        <p>SQL</p>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <UITechCategory>Tools</UITechCategory>

                <ul className="flex flex-row flex-wrap gap-6">
                    <li className="flex flex-row gap-3">
                        <UIGitIcon />
                        <p>Git</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UIGitHubIcon />
                        <p>GitHub</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UIDockerIcon />
                        <p>Docker</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UILinuxIcon />
                        <p>Linux</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HomeTechStack;
