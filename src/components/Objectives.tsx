const objectives = [
  {
    number: "01",
    title: "深度学习稻盛和夫经营哲学",
    subtitle: "重新找回企业经营的初心与理念",
    description: "从【敬天爱人】、【利他精神】到【阿米巴经营】，系统理解稻盛哲学背后的精神内核，反思自身企业的经营逻辑与价值观。",
    icon: "📚"
  },
  {
    number: "02",
    title: "实地走访世界级企业",
    subtitle: "向卓越学习经营实践",
    description: "深入参访【京瓷集团】、【丰田汽车】，观察五百强企业如何将理念落实于组织管理、人才培养与品质运营，汲取可转化的实务经验。",
    icon: "🏢"
  },
  {
    number: "03",
    title: "沉浸式感受日本职人精神与品牌文化",
    subtitle: "",
    description: "从细节中体会【把事情做到极致】的匠人态度，学习日本服务精神与品牌长期主义的坚持，让企业文化更具厚度与温度。",
    icon: "⛩️"
  },
  {
    number: "04",
    title: "企业强化团队凝聚，共建企业文化愿景",
    subtitle: "",
    description: "这不止是一趟公司旅游，更是一场企业愿景共鸣的旅程。让团队在参访中激发使命，在交流中加深信任，在远行中重新出发。",
    icon: "🤝"
  }
];

const Objectives = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              学习目标
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            四大核心价值
          </h2>
          <p className="text-lg text-muted-foreground">
            深度体验 · 系统学习 · 实践转化
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {objectives.map((obj, index) => (
            <div 
              key={index}
              className="objective-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{obj.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-bold text-primary/20 leading-none">
                      {obj.number}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {obj.title}
                    </h3>
                    {obj.subtitle && (
                      <p className="text-sm font-medium text-primary mb-2">
                        {obj.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;