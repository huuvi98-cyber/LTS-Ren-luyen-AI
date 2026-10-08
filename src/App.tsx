/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FULL_EXACT_TEXT, VERBATIM_SENTENCES } from './data/textData';
import { NeuralEducationCanvas } from './components/NeuralEducationCanvas';
import { AiEducationIllustration } from './components/AiEducationIllustration';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-stone-800 font-rounded flex flex-col justify-center items-center px-4 py-8 sm:px-8 lg:px-12 selection:bg-sky-100 selection:text-sky-900">
      {/* Light subtle background animation */}
      <NeuralEducationCanvas intensity="gentle" />

      {/* Main clean text container */}
      <main className="relative z-10 w-full max-w-[750px] mx-auto my-auto py-2 flex flex-col items-center">
        {/* Animated Kid-friendly Icons: Clear Máy vi tính, Chú Robot AI & iPad */}
        <AiEducationIllustration />

        {/* Verbatim Article Text: Bề ngang cụm chữ 750px, font tròn dày hơn, chữ to hơn xíu, khoảng cách dòng gần hơn tí */}
        <article className="w-full max-w-[750px] font-rounded font-semibold text-[19px] sm:text-[20.5px] leading-[1.58] text-stone-850 text-justify sm:text-left mt-3">
          <p>
            {VERBATIM_SENTENCES.map((item, index) => {
              // Special bolding for “Rèn năng lực AI từ phổ thông”
              if (item.text.includes('“Rèn năng lực AI từ phổ thông”')) {
                const parts = item.text.split('“Rèn năng lực AI từ phổ thông”');
                return (
                  <span key={item.id}>
                    {parts[0]}
                    <strong className="font-extrabold text-stone-950">
                      “Rèn năng lực AI từ phổ thông”
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
      </main>
    </div>
  );
}
