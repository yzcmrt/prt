"use client";
import React, { useEffect, useRef, useState } from 'react';

export const MatrixIntro = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showJoke, setShowJoke] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix'in orijinal Katakana karakterleri ve bazı semboller
    const chars = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890¦｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    const fontSize = 15;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Mesajları zamanla göster
    setTimeout(() => setShowMessage(true), 1500);
    setTimeout(() => setShowJoke(true), 3000);
    
    // Daha yavaş bir fade-out efekti
    setTimeout(() => {
      const fadeOut = setInterval(() => {
        setOpacity((prev) => {
          if (prev <= 0) {
            clearInterval(fadeOut);
            setTimeout(() => setIsVisible(false), 1000);
            return 0;
          }
          return prev - 0.005;
        });
      }, 50);
    }, 4000);

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black transition-opacity duration-2000"
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      {showMessage && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: Math.min(1, opacity + 0.3) }}
        >
          <h1 className="text-[#00FF41] text-4xl font-bold neon-text z-10">
            YOU GOT HACKED!
          </h1>
        </div>
      )}
      {showJoke && (
        <div 
          className="absolute inset-0 flex items-center justify-center mt-20"
          style={{ opacity: Math.min(1, opacity + 0.3) }}
        >
          <h2 className="text-[#00FF41] text-2xl font-bold neon-text z-10">
            it's a joke :D
          </h2>
        </div>
      )}
    </div>
  );
};