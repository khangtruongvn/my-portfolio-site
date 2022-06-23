import Image from 'next/image';
import { memo } from 'react';

const CustomImage = ({
  src = '',
  alt = '',
  layout = 'fill',
  loading = 'lazy',
  width,
  height,
  className,
  onClick,
}) => {
  const nextImageProps = {
    ...(src && { src: src }),
    ...(layout && { layout: layout }),
    ...(loading && { loading: loading }),
    ...(height && { height: height }),
    ...(width && { width: width }),
    ...(alt && { alt: alt }),
  };

  return (
    <div
      className="image-container"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Image alt="" {...nextImageProps} className={`${className} image`} />
    </div>
  );
};

export default memo(CustomImage);
