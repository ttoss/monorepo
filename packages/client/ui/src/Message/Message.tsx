import * as React from 'react';

export type MessageProps = { message: 'a' | 'b' };

export const Message = ({ message }: MessageProps) => {
  return <div>{message}</div>;
};
