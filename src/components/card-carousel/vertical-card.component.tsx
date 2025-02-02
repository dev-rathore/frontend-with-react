import React, {
  useState,
} from 'react';
import { Button } from '..';
import { ButtonColor } from '../button/button.component';
// import heartIcon from '../../assets/heart.svg';
import CategoriesSection from './categories-section.component';

interface VerticalCardProps extends React.HTMLAttributes<HTMLDivElement>{
  categories: string[];
  description: string;
  previewImage: string;
}

const VerticalCard: React.FC<VerticalCardProps> = ({
  categories,
  description,
  previewImage,
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
        style={{
          background: `url('${previewImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '320px',
          minWidth: '240px',
        }}
      >
        <div
          onMouseLeave={handleMouseLeave}
          className='absolute rounded-md w-80'
          style={{
            backgroundColor: '#16181F',
            left: '50%',
            opacity: previewCardVisibility === 'visible' ? 1 : 0,
            overflow: 'hidden',
            top: '50%',
            transform: `translate(-50%, -50%) scale(${previewCardVisibility === 'visible' ? 1 : 0.5})`,
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            zIndex: 2,
          }}
        >
          <div
            className='relative'
            style={{
              background: `url('${previewImage}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '180px',
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
            <div className="flex gap-2">
              <div className='grow'>
                <Button fullWidth color={ButtonColor.DISNEY_PLUS_HOTSTAR_PRIMARY}>Watch Now</Button>
              </div>
              <div className="flex-none">
                <Button
                  color={ButtonColor.DISNEY_PLUS_HOTSTAR_SECONDARY}
                >
                  {/* <img src={heartIcon} alt="heart" /> */}
                  +
                </Button>
              </div>
            </div>
            <CategoriesSection categories={categories} />
            <div className="text-sm"
              style={{
                color: 'rgb(143, 152, 178)',
              }}
            >
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticalCard;
