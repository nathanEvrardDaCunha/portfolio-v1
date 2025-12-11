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

const HomeTechStack = () => {
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <h2 className="mb-8 text-2xl font-bold text-neutral-950 dark:text-neutral-50">Tech Stack</h2>

            <div className="mb-8 flex flex-col gap-4">
                <h3 className="text-xl font-medium text-neutral-950 dark:text-neutral-50">Front End</h3>

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

                    {/* TODO: Add "monitor-smartphone" icon to this <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>Responsive Design</p>
                    </li>

                    {/* TODO: Add "accessibility" icon to this <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>Accessibility</p>
                    </li>
                </ul>
            </div>

            <div className="mb-8 flex flex-col gap-4">
                <h3 className="text-xl font-medium text-neutral-950 dark:text-neutral-50">Back End</h3>

                <ul className="flex flex-row flex-wrap gap-6">
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
                        <p>Node.Js</p>
                    </li>

                    <li className="flex flex-row gap-3">
                        <UIExpressIcon />
                        <p>Express</p>
                    </li>

                    {/* TODO: Add "server-cog" icon to this <li>*/}
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
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

                    {/* TODO: Add "database" icon to this <li>*/}
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
                        <p>SQL</p>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium text-neutral-950 dark:text-neutral-50">Tools</h3>

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
