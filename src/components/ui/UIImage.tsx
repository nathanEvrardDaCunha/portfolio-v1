import clsx from 'clsx';
import { twJoin } from 'tailwind-merge';

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
            className={twJoin(clsx('aspect-auto h-64 w-fit rounded-lg shadow-md'), className)}
            {...props}
        />
    );
};
export default UIImage;
