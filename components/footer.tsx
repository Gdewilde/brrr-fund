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

import VercelLogo from '@components/icons/icon-platform';
import { CODE_OF_CONDUCT, COPYRIGHT_HOLDER, LEGAL_URL, REPO, SITE_NAME } from '@lib/constants';
import cn from 'classnames';
import styles from './footer.module.css';

export function HostedByVercel() {
  return (
    <a
      href="https://vercel.com"
      className={cn(styles['footer-link'], styles['footer-logo'])}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles['secondary-text']}>Powered by </div>
      <VercelLogo color="white" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className={cn(styles.footer)}>
      <div className={styles['footer-legal']}>
        <div className={styles['footer-hostedby']}>
          <HostedByVercel />
          <div className={styles['footer-separator']} />
        </div>
        <div className={styles['footer-copyright']}>
          Copyright © {`${new Date().getFullYear()} `} {COPYRIGHT_HOLDER || `${SITE_NAME}.`} All
          rights reserved.
        </div>
        <div className={styles['footer-center-group']}>
          <p className={styles['footer-paragraph']}>
            <a
              href={REPO}
              className={styles['footer-link']}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </p>
          <div className={styles['footer-separator']} />
          <p className={styles['footer-paragraph']}>
            <a
              href={CODE_OF_CONDUCT}
              className={styles['footer-link']}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </a>
          </p>
          {LEGAL_URL && (
            <>
              <div className={styles['footer-separator']} />
              <p className={styles['footer-paragraph']}>
                <a
                  href={LEGAL_URL}
                  className={styles['footer-link']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legal
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
