import * as React from 'react';
import { type FieldError } from 'react-hook-form';

import { Error } from './error';
import { Label } from './label';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  labelSize?: number;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, error, children, labelSize } = props;
  return (
    <div>
      <Label>
        <span className={`text-[${labelSize}px]`}>{label}</span>
        <div className="mt-1">{children}</div>
      </Label>
      <Error errorMessage={error?.message} />
    </div>
  );
};
