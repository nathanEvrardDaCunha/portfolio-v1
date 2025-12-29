import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UIImageProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    loading: 'eager' | 'lazy';
    fetchPriority: 'high' | 'low' | 'auto';
    width: number;
    height: number;
}

const UIImage = ({
    src,
    alt = 'Default Alt for Image',
    loading = 'lazy',
    fetchPriority,
    width,
    height,
    className,
    ...props
}: UIImageProps) => {
    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            fetchPriority={fetchPriority}
            width={width}
            height={height}
            className={twMerge(clsx('border border-neutral-200 shadow-md', 'dark:border-neutral-800'), className)}
            {...props}
        />
    );
};
export default UIImage;
