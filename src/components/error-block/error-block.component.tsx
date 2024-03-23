import React from 'react';
import { Link } from 'react-router-dom';

type CTA = {
  href: string;
  text: string;
};

interface ErrorBlockProps {
  cta?: CTA;
  messages: string[];
  title: string;
}

const ErrorBlock: React.FC<ErrorBlockProps> = ({
  cta,
  messages,
  title,
}) => (
  <div className='bg-white flex min-h-screen w-full items-center justify-center p-4 text-center' data-testid='notFoundContainer'>
    <div className='flex flex-col gap-3'>
      <h1 className='text-2xl font-semibold text-black md:text-4xl'>{title}</h1>
      {messages.map((message, index) => (
        <p key={index} className='text-base text-slate-600 md:text-lg'>{message}</p>
      ))}
      {cta && <p className='text-base text-slate-600 md:text-lg'>
        Let's get you back {cta.text === 'home' ? '' : 'to the'} <Link className='text-black' to={cta.href}>{cta.text}</Link>.
      </p>}
    </div>
  </div>
);

export default ErrorBlock;
