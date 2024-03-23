import clsx from 'clsx';
import * as React from 'react';

import styles from './form-input.styles';
import { FormInputKind } from './form-input';
import { ThemeLook } from '../../types/theme';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  endEnhancer?: React.ReactElement | string;
  error?: string;
  handleFormInputRef?: (
    ref: HTMLInputElement,
  ) => void;
  index?: number;
  kind?: FormInputKind;
  startEnhancer?: React.ReactElement | string;
  testId?: string;
  textAlign?: 'left' | 'center' | 'right';
  theme?: ThemeLook;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  endEnhancer,
  error,
  handleFormInputRef,
  index,
  kind = FormInputKind.PRIMARY,
  startEnhancer,
  testId,
  textAlign = 'left',
  theme = ThemeLook.LIGHT,
  type,
  ...props
}) => (
  <div
    className={clsx([
      styles.kind[kind].inputContainer,
      styles.theme[theme],
      error ? styles.border.errorState : styles.border.normalState,
    ])}
  >
    <div className='flex gap-2'>
      {startEnhancer && <span className="flex h-full min-w-6 items-center justify-center">
        {startEnhancer}
      </span>}
      <input
        {...props}
        autoComplete='off'
        className={clsx([
          styles.kind[kind].input,
          theme === ThemeLook.LIGHT ? 'text-indigo-700' : 'text-slate-100',
          textAlign ? styles.textAlign[textAlign] : '',
        ])}
        data-testid={testId}
        type={type || 'text'}
        ref={handleFormInputRef ? (ref) => handleFormInputRef(ref) : null}
      />
      {endEnhancer && <span className="flex h-full min-w-6 items-center justify-center">
        {endEnhancer}
      </span>}
    </div>
  </div>
);

export default FormInput;
