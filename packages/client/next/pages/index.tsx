import * as React from 'react';

import Head from 'next/head';

import { Message } from '@client/components';
import { magicNumber } from '@lib/magic-number';

export default function Home() {
  const message = `The magic number of Next.js is ${magicNumber()}.`;
  return (
    <div>
      <Head>
        <title>Next Magic Number</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Message message={message} />
    </div>
  );
}
