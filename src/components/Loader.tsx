import { useEffect, useState } from "react";
import binoLogo from "@/assets/bino-logo.png";

const messages = [
  "欢迎 MAG Holdings Berhad！",
  "让我们一起开启研学之旅",
  "你准备好了吗？",
  "请查收您的行程表～"
];

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // 每条消息显示1.8秒后切换到下一条
    messages.forEach((_, index) => {
      if (index < messages.length) {
        const timer = setTimeout(() => {
          if (index < messages.length - 1) {
            setCurrentMessage(index + 1);
          } else {
            // 最后一条消息显示后开始退出
            setIsExiting(true);
          }
        }, (index + 1) * 1800);
        timers.push(timer);
      }
    });

    // 退出动画完成后调用onComplete
    const completeTimer = setTimeout(() => {
      onComplete();
    }, messages.length * 1800 + 800);
    timers.push(completeTimer);

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary/95 via-secondary/90 to-primary-dark/95 transition-opacity duration-700 px-4 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo - Larger */}
      <div className="mb-16 md:mb-20 animate-fade-in">
        <img 
          src={binoLogo} 
          alt="Bino EduTour" 
          className="h-40 sm:h-52 md:h-64 w-auto drop-shadow-2xl"
        />
      </div>

      {/* Single Message Display with Zoom In Effect */}
      <div className="flex items-center justify-center min-h-[140px] sm:min-h-[180px] md:min-h-[220px]">
        <div
          key={currentMessage}
          className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center px-6 max-w-5xl leading-tight animate-zoom-in"
        >
          {messages[currentMessage]}
        </div>
      </div>

      {/* Loading dots */}
      <div className="mt-16 md:mt-20 flex gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
