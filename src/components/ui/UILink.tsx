import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UILinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href: string;
    target?: '_blank';
}

const UILink = ({ children, href, target = '_blank', className, ...props }: UILinkProps) => {
    return (
        <a href={href} target={target} className={twMerge(clsx(''), className)} {...props}>
            {children}
        </a>
    );
};

export default UILink;
