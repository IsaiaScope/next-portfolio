'use client';

import { useChangeLocale } from '@/locale/client';

export default function Home({ params: { lang } }: { params: { lang: any } }) {
  const changeLocale = useChangeLocale()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>HOME</div>
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('it')}>French</button>
    </main>
  );
}
