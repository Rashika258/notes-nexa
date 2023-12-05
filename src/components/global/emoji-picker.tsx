import React, { FC, ReactNode } from 'react';

interface EmojiPickerProps {
    children: ReactNode, 
    getValue?: (emoji: string) => void
}

const EmojiPicker: FC<EmojiPickerProps> = () => {
  return (
    <div>
      
    </div>
  );
}

export default EmojiPicker;
