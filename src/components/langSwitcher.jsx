"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition, useState, useEffect } from "react";

function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [ lang, setLang ] = useState("");

  useEffect(() => {

    console.log("router", router);

    if(router.locale) {
        setLang(locale);
    }
  }
  , [router.locale]);
//   console.log(router.pathname);
  console.log("route locale", router.locale);

  const changeLocale = (locale) => {
    setLang(locale);
    console.log("locale", locale);

    
    startTransition(() => {
      router.push(pathname, { locale });
    });
  };
  return (
    <div className="relative">
      <select
        onChange={(e) => changeLocale(e.target.value)}
        className="bg-white text-black border py-2 px-3 rounded-md text-lg"
        defaultValue={router.locale}

      >
        <option value="en">🇺🇸 English</option>
        <option value="th">🇹🇭 ไทย</option>
      </select>
    </div>
  );
}
export default LangSwitcher;
