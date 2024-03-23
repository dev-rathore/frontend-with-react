import React, {
  useState,
} from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
// import heartIcon from '../../assets/heart.svg';

interface TertiaryCardProps extends React.HTMLAttributes<HTMLDivElement>{
  previewImage: string;
  timeLeft: string;
  title: string;
  viewMoreUrl: string;
}

const TertiaryCard: React.FC<TertiaryCardProps> = ({
  previewImage,
  timeLeft,
  title,
  viewMoreUrl,
  ...props
}) => {
  const [previewCardVisibility, setPreviewCardVisibility] = useState<DocumentVisibilityState>('hidden');

  const navigate = useNavigate();

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
          style={{
            width: '100%',
            height: '2px',
            background: 'white',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(90deg, #FFD700 0%, #FF8C00 100%)',
              height: '100%',
              width: '70%',
            }}
          />
        </div>
        <div
          onMouseLeave={handleMouseLeave}
          className='absolute rounded-md w-80'
          style={{
            backgroundColor: '#16181F',
            left: '50%',
            opacity: previewCardVisibility === 'visible' ? 1 : 0,
            overflow: 'hidden',
            top: '50%',
            transform: `translate(-50%, -50%) scaleX(${previewCardVisibility === 'visible' ? 0.95 : 0.8}) scaleY(${previewCardVisibility === 'visible' ? 1 : 0.8})`,
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
          />
          <div
            style={{
              width: '100%',
              height: '2px',
              background: 'white',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(90deg, #FFD700 0%, #FF8C00 100%)',
                height: '100%',
                width: '70%',
              }}
            />
          </div>
          <div className="p-3 pt-4 text-white">
            <div className='text-white text-lg'>
              {title.slice(0, 40)}
            </div>
            <div 
              className='text-white pt-2 text-lg'
              style={{
                color: 'rgb(143, 152, 178)',
              }}
            >
              {timeLeft}
            </div>
            <div
              className="flex items-center justify-center text-base rounded-full px-4 mt-6"
              onClick={() => navigate(viewMoreUrl)}
            >
              View More Details <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="text-white text-lg pt-2 px-4">
          <div>
            {title.slice(0, 40)}
          </div>
          <div
            style={{
              color: 'rgb(143, 152, 178)',
            }}
          >
            {timeLeft}
          </div>
        </div>
      </div>
    </>
  );
}

export default TertiaryCard;
