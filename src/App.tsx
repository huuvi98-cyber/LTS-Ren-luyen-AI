/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FULL_EXACT_TEXT, VERBATIM_SENTENCES } from './data/textData';
import { NeuralEducationCanvas } from './components/NeuralEducationCanvas';
import { AiEducationIllustration } from './components/AiEducationIllustration';
import { CoverHeaderBanner } from './components/CoverHeaderBanner';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-stone-800 font-rounded flex flex-col items-center selection:bg-sky-100 selection:text-sky-900 pb-12">
      {/* Light subtle background animation */}
      <NeuralEducationCanvas intensity="gentle" />

      {/* Main clean container with full screen width banner */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Cover Image Banner (1920x1080 16:9 ratio) spanning full screen width */}
        <CoverHeaderBanner />

        {/* Verbatim Article Text: Bề ngang cụm chữ 750px, font tròn dày hơn, chữ to hơn xíu, khoảng cách dòng gần hơn tí */}
        <article className="w-full max-w-[750px] px-4 sm:px-8 font-rounded font-semibold text-[19px] sm:text-[20.5px] leading-[1.58] text-stone-850 text-justify sm:text-left mb-6">
          <p>
            {VERBATIM_SENTENCES.map((item, index) => {
              // Special bolding for series title phrase
              const titlePhrase = '“Rèn năng lực, dựng “lá chắn” khi dạy AI cho học sinh”';
              if (item.text.includes(titlePhrase)) {
                const parts = item.text.split(titlePhrase);
                return (
                  <span key={item.id}>
                    {parts[0]}
                    <strong className="font-extrabold text-stone-950">
                      {titlePhrase}
                    </strong>
                    {parts[1]}
                    {' '}
                  </span>
                );
              }

              if (index === 0) {
                return (
                  <span key={item.id}>
                    <strong className="font-bold text-sky-700 mr-1">
                      LTS:
                    </strong>
                    <span>
                      {item.text.replace(/^LTS:\s*/, '')}
                    </span>
                    {' '}
                  </span>
                );
              }

              return (
                <span key={item.id}>
                  {item.text}
                  {' '}
                </span>
              );
            })}
          </p>
        </article>

        {/* Animated Kid-friendly Icons: Nằm dưới chữ */}
        <AiEducationIllustration />
      </main>
    </div>
  );
}
