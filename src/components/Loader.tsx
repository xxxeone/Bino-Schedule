import { useEffect, useState } from "react";
import binoLogo from "@/assets/bino-logo.png";

const messages = [
  "欢迎 MAG Holdings Berhad！",
  "WELCOME_NAMES", // Special marker for names display
  "让我们一起开启研学之旅",
  "你准备好了吗？",
  "请查收您的行程表～"
];

const teamMembers = [
  "Stephen",
  "Darren", 
  "Danny",
  "Wilson",
  "Jacelyn",
  "Joanne",
  "Lih Meei"
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

  const renderMessage = () => {
    const message = messages[currentMessage];
    
    if (message === "WELCOME_NAMES") {
      return (
        <div className="animate-zoom-in">
          <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
            欢迎各位贵宾
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 px-4">
            {teamMembers.map((name, index) => (
              <div
                key={name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center border border-white/20 shadow-lg hover:bg-white/20 transition-all"
                style={{ 
                  animation: `zoom-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center px-6 max-w-5xl leading-tight animate-zoom-in">
        {message}
      </div>
    );
  };

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

      {/* Message Display */}
      <div className="flex items-center justify-center min-h-[140px] sm:min-h-[180px] md:min-h-[280px] w-full max-w-6xl">
        <div key={currentMessage} className="w-full">
          {renderMessage()}
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
