'use client';
import {usePathname, useRouter} from '@/i18n/routing';
import {useLocale} from 'next-intl';
import {useTransition, useState, useEffect} from 'react';

function LangSwitcher() {
  const router = useRouter();
  const countryCode = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [lang, setLang] = useState('');

  useEffect(() => {
    console.log('this is locale:', countryCode);
    console.log('lang', lang);
  }, []);

  const changeLocale = (locale) => {
    setLang(locale);

    startTransition(() => {
      router.push(pathname, {locale});
    });
  };

  return (
    <div className='relative'>
      <select
        onChange={(e) => changeLocale(e.target.value)}
        className='bg-white text-black border py-2 px-3 rounded-md text-lg'
        defaultValue={countryCode}
      >
        <option value='en'>🇺🇸 English</option>
        <option value='th'>🇹🇭 ไทย</option>
      </select>
    </div>
  );
}
export default LangSwitcher;
