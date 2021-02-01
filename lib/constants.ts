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

export const SITE_URL = 'https://brrr.fund';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'wsbmod';
export const BRAND_NAME = 'BRRR Fund';
export const SITE_NAME_MULTILINE = ['BRRR', 'Fund'];
export const SITE_NAME = 'BRRR Fund';
export const META_DESCRIPTION =
  'The largest decentralized hedge fund in the world. Bringing the decentralized web to Wall Street';
export const SITE_DESCRIPTION = 'Bringing the decentralized web to Wall Street. ';
export const DATE = 'October 27, 2020';
export const SHORT_DATE = 'Oct 27 - 9:00am PST';
export const FULL_DATE = 'Oct 27th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT = '';
export const REPO = 'https://github.com/Gdewilde/brrr-fund';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Investments (soon)',
    route: '/'
  },
  {
    name: 'Team (soon)',
    route: '/'
  },
  {
    name: 'Jobs (kidding)',
    route: '/'
  }
];

export type TicketGenerationState = 'default' | 'loading';
