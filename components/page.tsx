/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SITE_NAME, SITE_URL, TWITTER_USER_NAME } from '@lib/constants';
import cn from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';


type Meta = {
  title: string | null;
  description: string | null;
  image?: string | null;
  url?: string | null;
};

type Props = {
  meta: Meta;
  children: React.ReactNode;
  fullViewport?: boolean;
};

export default function Page({ meta, children, fullViewport = false }: Props) {
  const router = useRouter();
  const image = meta.image || '/twitter-card.png';
  const title = meta.title || SITE_NAME;
  const url = meta.url || `${SITE_URL}${router.asPath}`;
  const description = meta.description || SITE_NAME;

  return (
    <div className={cn('page-container', { full: fullViewport })}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
        <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="preload"
          href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="google-site-verification" content="UmgIX1j0uoml8u0zJw7Pd9q9E9yjg88gEwhlBdVZfMk" />
        {image && (
          <meta
            property="og:image"
            content={image.startsWith('https://') ? image : `${SITE_URL}${image}`}
          />
        )}
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: ` (function (w,n,pid) {
              w[n]=w[n] || (function () {
                d=document,h=d.getElementsByTagName('head')[0],s=d.createElement('script'),eq=[];
                s.src="https://cdn.gingertag.com/gt.js?pid="+pid;s.type='text/javascript';s.async=1;h.appendChild(s);
                return {event:function(){w[n].eq.push(arguments);},eq};
              }());
            })(window,'gingertag',535564642);`
          }}
         />
      </Head>
      {children}
    </div>
  );
}
