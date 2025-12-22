import clsx from 'clsx';
import { twJoin } from 'tailwind-merge';

interface UITechProps extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}

const UITech = ({ children, className, ...props }: UITechProps) => {
    return (
        <li className={twJoin(clsx('flex flex-row gap-3'), className)} {...props}>
            {children}
        </li>
    );
};

export default UITech;
