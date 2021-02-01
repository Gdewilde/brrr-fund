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

import { SITE_DESCRIPTION } from '@lib/constants';
import cn from 'classnames';
import styles from './hero.module.css';
import styleUtils from './utils.module.css';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        BRRR Fund
      </h1>
      <h2>
        The largest decentralized <s>hedge fund</s> in the world. <a href='https://twitter.com/chamath/status/1355580731980869637'>Don't take our word for it.</a>
      </h2>
      <br/>
      <div style={{ margin: '0 auto' }}>
        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">r/wallstreetbets is now the largest hedge fund in the world. <br/><br/>Excepts it’s completely decentralized and entirely democratic.</p>&mdash; Chamath Palihapitiya (@chamath) <a href="https://twitter.com/chamath/status/1355580731980869637?ref_src=twsrc%5Etfw">January 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>XXXX Time till markets open</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>7.6M Investors</strong>
        </p>
        <div className={styles['description-separator']} />
        <p>
          <strong>∞ AUM</strong>
        </p>
      </div>
      <a className={styles.button} href='https://www.reddit.com/r/wallstreetbets/'>Join us @ r/wallstreetbets</a>
    </div>
  );
}
