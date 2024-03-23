import React, {
  useState,
} from 'react';
// import heartIcon from '../../assets/heart.svg';

interface HorizontalCardProps extends React.HTMLAttributes<HTMLDivElement>{
  description: string;
  previewImage: string;
  title: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  description,
  previewImage,
  title,
  ...props
}) => {
  const [previewCardVisibility, setPreviewCardVisibility] = useState<DocumentVisibilityState>('hidden');

  const handleMouseEnter = () => {
    setPreviewCardVisibility('visible');
  };

  const handleMouseLeave = () => {
    setPreviewCardVisibility('hidden');
  };

  return (
    <>
      <div
        {...props}
        className='relative rounded-md cursor-pointer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{
            background: `url('${previewImage}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '180px',
            minWidth: '280px',
          }}
        />
        <div
          onMouseLeave={handleMouseLeave}
          className='absolute rounded-md w-80'
          style={{
            backgroundColor: '#16181F',
            left: '50%',
            opacity: previewCardVisibility === 'visible' ? 1 : 0,
            overflow: 'hidden',
            top: '50%',
            transform: `translate(-50%, -50%) scale(${previewCardVisibility === 'visible' ? 0.95 : 0.8})`,
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            zIndex: 2,
          }}
        >
          <div
            className='relative'
            style={{
              background: `url('${previewImage}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '160px',
            }}
          >
            <div
              className='h-10 w-full absolute bottom-0'
              style={{
                background: 'linear-gradient(180deg, rgba(22, 24, 31, 0) 0%, #16181F 100%)',
              }}
            />
          </div>
          <div className="p-3 pt-1 text-white">
            <div className='text-white text-lg'>
              {title.slice(0, 40)}
            </div>
            <div className="text-sm"
              style={{
                color: 'rgb(143, 152, 178)',
              }}
            >
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className='text-white text-lg pt-2 px-4'>
          {title.slice(0, 40)}
        </div>
      </div>
    </>
  );
}

export default HorizontalCard;
