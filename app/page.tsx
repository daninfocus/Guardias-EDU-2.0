import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  
  return (
    <div>
    test
  </div>
  )
}
export const dynamic = 'force-static'