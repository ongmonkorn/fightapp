import React from "react";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";

const imageAssets = [img1, img2, img3, img4, img5, img6];
const emojis = ["💀", "🕶️", "🖤", "🔥", "⚡", "🎸", "🌃", "🦾"];

// ปรับจำนวนรูปให้พอดีกับขนาดที่ใหญ่ขึ้น (12-15 รูปกำลังสวย ไม่รกเกินไป)
const chaosImages = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  url: imageAssets[i % imageAssets.length],
  left: `${Math.random() * 85}%`, // ลดเหลือ 85% เพื่อไม่ให้รูปล้นขอบขวา
  delay: `${Math.random() * 12}s`,
  duration: `${5 + Math.random() * 5}s`,
  scale: 0.9 + Math.random() * 0.4, // สุ่มขนาดให้ใหญ่ตั้งแต่ 90% - 130%
}));

function App() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* Background Texture - แสงไฟส่องสลัวๆ */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_#222_0%,_#000_80%)]"></div>

      {/* --- Emoji ลอยแบบโปร่งแสง --- */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={`emoji-${i}`}
          className="absolute bottom-0 animate-chaos opacity-0 text-4xl select-none z-0 filter blur-[1px]"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        >
          {emojis[i % emojis.length]}
        </span>
      ))}

      {/* --- รูปภาพลอยแบบสะใจ (Extra Large) --- */}
      {chaosImages.map((img) => (
        <div
          key={img.id}
          className="absolute bottom-0 animate-chaos opacity-0 pointer-events-auto"
          style={{
            left: img.left,
            animationDelay: img.delay,
            animationDuration: img.duration,
            transform: `scale(${img.scale})`,
          }}
        >
          {/* กรอบรูปสีดำดีไซน์หนาพิเศษ */}
          <div className="group relative bg-zinc-950 p-3 pb-14 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 transition-all duration-500 hover:scale-110 hover:z-[100] hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            
            {/* ตัวรูปภาพขนาดใหญ่ขึ้นมาก */}
            <div className="w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-lg border border-black shadow-inner">
              <img
                src={img.url}
                alt="massive-float"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
            
            {/* รายละเอียดกรอบด้านล่าง */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase">Archive-0{img.id}</span>
                  <div className="h-4 w-[1px] bg-zinc-800"></div>
                  <span className="text-[10px] font-mono text-zinc-500 italic">© 2026</span>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
              </div>
            </div>

            {/* แสงสะท้อนหน้ากระจก (Glass Effect) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-30 pointer-events-none rounded-xl"></div>
          </div>
        </div>
      ))}

      {/* Overlay ข้อความเบื้องหลัง */}
      <div className="z-10 pointer-events-none text-center">
        <h1 className="text-[10rem] md:text-[20rem] font-black text-white/[0.03] select-none uppercase leading-none">
          เดะ<br/>ต่อย
        </h1>
      </div>

    </div>
  );
}

export default App;