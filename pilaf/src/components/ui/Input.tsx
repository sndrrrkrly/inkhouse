import React from 'react';

interface InputProps {
     className?: string
     type: string
     placeholder: string
     value: string
     error: string | undefined
     setValue: (str: string) => void
};

const Input: React.FC<InputProps> = ({
     className,
     type,
     placeholder,
     value,
     error,
     setValue
}) => {
     return (
          <>
               <input
                    className = 'm-2 p-2 text-xs text-gray-200 bg-washed rounded-8 mb-3'
                    placeholder = { placeholder }
                    type = { type }
                    value = { value }
                    onChange = { e => setValue(e.target.value)}
               />
          </>
     )
};

export default Input;