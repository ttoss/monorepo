import * as React from 'react';

import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to
          <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
