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
      <main className="relative z-10 w-full max-w-[700px] mx-auto my-auto py-2 flex flex-col items-center">
        {/* Animated Kid-friendly Icons: Clear Máy vi tính, Chú Robot AI & iPad */}
        <AiEducationIllustration />

        {/* Verbatim Article Text: Bề ngang cụm chữ 700px, font tròn cho học sinh/trẻ em, chữ to hơn xíu */}
        <article className="w-full max-w-[700px] font-rounded font-medium text-[17.5px] sm:text-[18.5px] leading-[1.8] text-stone-800 text-justify sm:text-left mt-3">
          <p>
            {VERBATIM_SENTENCES.map((item, index) => (
              <span key={item.id}>
                {index === 0 ? (
                  <>
                    <strong className="font-bold text-sky-700 mr-1">
                      LTS:
                    </strong>
                    <span>
                      {item.text.replace(/^LTS:\s*/, '')}
                    </span>
                  </>
                ) : (
                  <span>{item.text}</span>
                )}
                {' '}
              </span>
            ))}
          </p>
        </article>
      </main>
    </div>
  );
}
