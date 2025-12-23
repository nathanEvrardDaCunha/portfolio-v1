import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UITimelineLogoProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    loading: 'eager' | 'lazy';
    fetchPriority: 'high' | 'low' | 'auto';
    width: number;
    height: number;
}

const UITimelineLogo = ({
    src,
    alt = 'Default Alt for Image',
    loading = 'lazy',
    fetchPriority,
    width,
    height,
    className,
    ...props
}: UITimelineLogoProps) => {
    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            fetchPriority={fetchPriority}
            width={width}
            height={height}
            className={twMerge(
                clsx(
                    'z-10 aspect-square h-12 w-12 rounded-full border border-neutral-300 bg-neutral-50 object-cover hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:hover:bg-neutral-800'
                ),
                className
            )}
            {...props}
        />
    );
};
export default UITimelineLogo;
