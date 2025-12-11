import UIGitIcon from '../components/icons/UIGitIcon';
import UIJavaScriptIcon from '../components/icons/UIJavaScriptIcon';
import UINodeIcon from '../components/icons/UINodeIcon';

const HomeTechStack = () => {
    return (
        <section className="mx-auto max-w-3xl px-8 pb-16">
            <h2 className="mb-8 text-2xl font-bold text-neutral-950 dark:text-neutral-50">Tech Stack</h2>

            <div className="mb-8 flex flex-col gap-4">
                <h3 className="text-xl font-medium text-neutral-950 dark:text-neutral-50">Front End</h3>

                <ul className="flex flex-row flex-wrap gap-6">
                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIJavaScriptIcon />
                        <p>JavaScript</p>
                    </li>
                </ul>
            </div>

            <div className="mb-8 flex flex-col gap-4">
                <h3 className="text-xl font-medium text-neutral-950 dark:text-neutral-50">Back End</h3>

                <ul className="flex flex-row flex-wrap gap-6">
                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
                        <p>Node.Js</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
                        <p>Node.Js</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
                        <p>Node.Js</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
                        <p>Node.Js</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
                        <p>Node.Js</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UINodeIcon />
                        <p>Node.Js</p>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium text-neutral-950 dark:text-neutral-50">Tools</h3>

                <ul className="flex flex-row flex-wrap gap-6">
                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIGitIcon />
                        <p>Git</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIGitIcon />
                        <p>Git</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIGitIcon />
                        <p>Git</p>
                    </li>

                    {/* TODO: Add relevant technology brand icon to each <li>*/}
                    <li className="flex flex-row gap-3">
                        <UIGitIcon />
                        <p>Git</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HomeTechStack;
