import clsx from 'clsx';
import { twJoin } from 'tailwind-merge';

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
            className={twJoin(
                clsx(
                    'z-10 aspect-square h-12 w-12 rounded-full border border-neutral-300 bg-neutral-50 object-cover hover:bg-neutral-200'
                ),
                className
            )}
            {...props}
        />
    );
};
export default UITimelineLogo;
