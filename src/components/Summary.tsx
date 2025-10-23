const Summary = () => {
  const summaryData = [
    {
      title: "企业参访、活动安排与景点门票",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      items: [
        "第二天：名古屋 丰田汽车 企业参访",
        "第三天：京都 京瓷集团 企业参访",
        "第三天：京都 稻盛和夫纪念馆",
        "第四天：大阪 冈山健康餐饮集团 企业参访",
        "第五天：奈良 梅守寿司 企业参访",
        "第五天：奈良 梅守寿司 寿司 DIY 制作",
        "第七天：神户 六甲山缆车"
      ]
    },
    {
      title: "餐食",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        "12 个正餐",
        "7 个酒店早餐",
        "第二天：崎蟹料理 午餐（餐标：6000 日元/人）",
        "第四天：冈山餐饮集团 晚餐",
        "第五天：DIY 寿司 午餐",
        "第六天：神户牛肉 晚餐（餐标：6000 日元/人）",
        "第七天：闭营晚宴（餐标：6000 日元/人）"
      ]
    },
    {
      title: "交通",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      items: [
        "第一到第七天 - 全天 10 小时包车：14 座丰田海狮",
        "第八天 - 酒店大巴接送前往机场"
      ]
    },
    {
      title: "导游 & 翻译",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        "1 位马来西亚随团领队",
        "1 位日文/中文 导游 + 翻译：5 天（第一、第二、第三、第四、第五天）"
      ]
    },
    {
      title: "酒店住宿",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      items: [
        "3 - 4 星级酒店"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              8人配套·已含
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Summary Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {summaryData.map((section, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/30">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {section.title}
                  </h3>
                </div>

                {/* Section Items */}
                <ul className="space-y-2.5">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60 mt-2"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
