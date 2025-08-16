import React, { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const FINAL_WORD = 'SORTING VISUALIZER';

function getRandomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function LockStep() {
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    const animate = async () => {
      const initial = FINAL_WORD.split('').map(char =>
        char === ' ' ? ' ' : getRandomChar()
      );
      setDisplayed(initial);

      for (let i = 0; i < FINAL_WORD.length; i++) {
        const targetChar = FINAL_WORD[i];

        if (targetChar === ' ') {
          continue;
        }

        let tries = 0;
        const maxTries = 10;

        await new Promise(resolve => {
          const interval = setInterval(() => {
            setDisplayed(prev => {
              const updated = [...prev];
              updated[i] = getRandomChar();
              return updated;
            });

            tries++;

            
            if (tries >= maxTries) {
              clearInterval(interval);
              setTimeout(() => {
                setDisplayed(prev => {
                  const updated = [...prev];
                  updated[i] = targetChar;
                  return updated;
                });

                
                setTimeout(resolve, 100);
              }, 50);
            }
          }, 50);
        });
      }
    };

    animate();
  }, []);

  return (
    <h1 className="text-6xl font-bold tracking-widest text-white text-center">
      {displayed.join('')}
    </h1>
  );
}