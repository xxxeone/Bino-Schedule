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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary/95 via-secondary/90 to-primary-dark/95 transition-opacity duration-700 px-4 pt-20 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo - Larger and moved down */}
      <div className="mb-12 md:mb-16 animate-fade-in">
        <img 
          src={binoLogo} 
          alt="Bino EduTour" 
          className="h-32 sm:h-40 md:h-52 w-auto drop-shadow-2xl"
        />
      </div>

      {/* Single Message Display with Zoom In Effect */}
      <div className="flex items-center justify-center min-h-[120px] sm:min-h-[150px] md:min-h-[200px]">
        <div
          key={currentMessage}
          className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center px-4 max-w-4xl leading-tight animate-zoom-in"
        >
          {messages[currentMessage]}
        </div>
      </div>

      {/* Loading dots */}
      <div className="mt-12 md:mt-16 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
