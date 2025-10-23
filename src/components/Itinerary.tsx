const itineraryData = [
  {
    day: "第零天",
    date: "2025年10月26日（日）",
    location: "吉隆坡 → 大阪",
    items: [
      { time: "23:00", activity: "集合 吉隆坡国际机场", note: "" },
      { time: "02:10 +1", activity: "登机", note: "航班：AAX D7532" }
    ],
    accommodation: null,
    accommodationAddress: null,
    meals: null,
    notes: "航班：AAX D7532 - 02:10 - 09:35 [6hrs 25mins direct]",
    scheduleChange: false
  },
  {
    day: "第一天",
    date: "2025年10月27日（一）",
    location: "关西机场 → 大阪",
    items: [
      { time: "09:35", activity: "机场接机", note: "" },
      { time: "11:00", activity: "前往 大阪", note: "" },
      { time: "11:30", activity: "酒店 寄放行李", note: "" },
      { time: "12:00", activity: "午餐 螃蟹料理", note: "" },
      { time: "14:00", activity: "道顿堀 心斋桥 黑门市场", note: "" },
      { time: "", activity: "晚餐 + 自由活动", note: "自费" },
      { time: "22:00", activity: "入住 酒店", note: "" }
    ],
    accommodation: "大阪贝斯特韦斯特 (心斋桥店) - 靠近道顿堀 心斋桥商区",
    accommodationAddress: "大阪府大阪市中央区东心斋桥1丁目2-19",
    meals: "螃蟹料理午餐",
    scheduleChange: false
  },
  {
    day: "第二天",
    date: "2025年10月28日（二）",
    location: "大阪 → 名古屋 → 京都（包车）",
    items: [
      { time: "06:30", activity: "酒店早餐", note: "退房" },
      { time: "07:30", activity: "前往 名古屋 丰田汽车", note: "" },
      { 
        time: "09:30", 
        activity: "丰田产业技术纪念馆 企业参访 1", 
        note: "○ 世界五百强 - 2024年第15名\n○ 展示了丰田从纺织机制造起步到汽车工业发展的历程\n○ 通过真实机器演示与互动体验，让参观者近距离感受日本制造业的创新精神与工匠文化" 
      },
      { time: "12:30", activity: "名古屋城 午餐 + 自由活动", note: "自费" },
      { time: "15:00", activity: "前往 京都", note: "" },
      { time: "17:30", activity: "入住 京都酒店", note: "" },
      { time: "18:00", activity: "伏见稻荷大社 / 清水寺景区", note: "" },
      { time: "", activity: "晚餐 + 自由活动", note: "自费" }
    ],
    accommodation: "京都八条都酒店 - 靠近 京都车站",
    accommodationAddress: "京都府京都市南区西九条院町１７",
    meals: "酒店早餐",
    scheduleChange: false
  },
  {
    day: "第三天",
    date: "2025年10月29日（三）",
    location: "京都（包车）",
    items: [
      { time: "08:30", activity: "酒店早餐", note: "" },
      { time: "09:30", activity: "前往 京都 京瓷集团", note: "" },
      { 
        time: "10:00", 
        activity: "京瓷集团 企业参访 2", 
        note: "○ 稻盛和夫创办的第一家【世界五百强】企业\n○ 走进稻盛和夫亲手创立的总部基地，感受【敬天爱人】哲学如何渗透企业组织与管理\n○ 见证京瓷如何从精密陶瓷起步，拓展至汽车、工业、AI等全球关键领域，成为多元化制造巨头" 
      },
      { time: "11:00", activity: "稻盛和夫纪念馆", note: "追溯稻盛和夫一生的成长轨迹与经营智慧" },
      { time: "12:30", activity: "前往 岚山景区", note: "" },
      { time: "13:30", activity: "岚山景区 午餐 + 自由活动", note: "自费" },
      { time: "17:00", activity: "返回 京都酒店", note: "" },
      { time: "18:00", activity: "晚餐 + 自由活动", note: "自费" },
      { time: "22:00", activity: "入住 京都酒店", note: "" }
    ],
    accommodation: "京都八条都酒店 - 靠近 京都车站",
    accommodationAddress: "京都府京都市南区西九条院町１７",
    meals: "酒店早餐",
    scheduleChange: false
  },
  {
    day: "第四天",
    date: "2025年10月30日（四）",
    location: "京都 → 大阪（包车）",
    items: [
      { time: "07:00", activity: "酒店早餐", note: "退房" },
      { time: "07:45", activity: "前往 冈山健康餐饮集团 企业参访", note: "" },
      { 
        time: "09:00", 
        activity: "冈山健康餐饮集团 加工工厂 企业参访 3", 
        note: "○ 【农场食材开发 - 生产 - 流通 - 菜单规划 - 直营餐厅 - 品牌孵化 - 产业推广】为一体的【健康餐饮一体化企业模型】\n○ 日本健康餐饮的标杆和重要创新者，时常组织业内交流学习会\n○ 了解【从土地到餐桌】全链条运作" 
      },
      { time: "12:00", activity: "前往 大阪城公园 景区", note: "" },
      { time: "12:30", activity: "大阪城公园景区 午餐 + 自由活动", note: "自费" },
      { time: "16:00", activity: "冈山餐饮梅田直营店", note: "" },
      { time: "", activity: "晚餐 + 社长交流", note: "" },
      { time: "20:00", activity: "入住 大阪酒店", note: "" },
      { time: "20:30", activity: "通天阁 商区 自由活动 或", note: "自费" },
      { time: "", activity: "体验 温泉主题乐园", note: "" }
    ],
    accommodation: "the b 大阪新世界酒店 - 靠近通天阁 温泉主题乐园",
    accommodationAddress: "大阪府大阪市浪速区恵美須東２丁目１−２４",
    meals: "酒店早餐，冈山餐饮梅田直营店晚餐",
    scheduleChange: false
  },
  {
    day: "第五天",
    date: "2025年10月31日（五）",
    location: "大阪 → 奈良（包车）",
    items: [
      { time: "08:00", activity: "酒店早餐", note: "退房" },
      { time: "09:00", activity: "前往 奈良 梅守寿司 企业参访 4", note: "" },
      { time: "09:30", activity: "梅守寿司 企业参访 4", note: "" },
      { 
        time: "10:30", 
        activity: "梅守寿司创办人分享", 
        note: "○ 稻盛和夫亲弟子\n○ 创办人亲自分享：何谓经营？如何找到自己的使命？如何让全员工上下同心，理念一致？\n○ 亲身体验企业每日晨会，理念先行的企业文化如何落地实践" 
      },
      { time: "12:00", activity: "体验 寿司制作 + 午餐", note: "" },
      { time: "13:30", activity: "前往 若草山 景区", note: "" },
      { time: "14:00", activity: "若草山景区 自由活动", note: "自费" },
      { time: "15:30", activity: "返回 奈良酒店", note: "靠近 奈良公园 东大寺 春日大社 景区" },
      { time: "16:00", activity: "奈良公园 东大寺 春日大社", note: "" },
      { time: "", activity: "晚餐 + 自由活动", note: "自费" }
    ],
    accommodation: "海茵娜酒店 Premier 奈良酒店 - 靠近奈良公园 东大寺 春日大社 景区",
    accommodationAddress: "奈良県奈良市高天町 46番1",
    meals: "酒店早餐，自制寿司午餐",
    scheduleChange: false
  },
  {
    day: "第六天",
    date: "2025年11月1日（六）",
    location: "京都 → 神户（包车）",
    items: [
      { time: "08:00", activity: "酒店早餐", note: "退房" },
      { time: "09:00", activity: "前往 神户", note: "" },
      { time: "10:30", activity: "酒店 寄存行李", note: "" },
      { time: "11:00", activity: "生田神社 南京町 神户港塔 美利坚公园 神户旧居留地", note: "" },
      { time: "", activity: "午餐 + 自由活动", note: "自费" },
      { time: "18:30", activity: "晚餐 神户牛肉", note: "" },
      { time: "21:00", activity: "入住 神户酒店", note: "" }
    ],
    accommodation: "神户卡萨贝琳酒店 - 靠近 神户三宫 景区",
    accommodationAddress: "兵庫県神戸市兵庫区西上橘通１丁目４−２７",
    meals: "酒店早餐，晚餐 神户牛肉",
    scheduleChange: false
  },
  {
    day: "第七天",
    date: "2025年11月2日（日）",
    location: "神户 → 关西机场（包车）",
    items: [
      { time: "08:00", activity: "酒店早餐", note: "退房" },
      { time: "09:00", activity: "前往 六甲山景区", note: "" },
      { time: "09:30", activity: "六甲山缆车", note: "" },
      { time: "09:45", activity: "六甲山天览台 六甲山牧场", note: "" },
      { time: "", activity: "午餐 + 自由活动", note: "自费" },
      { time: "13:00", activity: "前往 关西机场", note: "" },
      { time: "14:30", activity: "入住 关西机场温泉酒店", note: "" },
      { time: "15:00", activity: "Rinku Premium Outlet 自由活动", note: "自费" },
      { time: "18:00", activity: "闭营晚餐 + 分享感悟", note: "" },
      { time: "21:00", activity: "温泉", note: "自费" },
      { time: "22:00", activity: "入住 关西机场温泉酒店", note: "" }
    ],
    accommodation: "关西机场华盛顿酒店 - 靠近 Rinku Premium Outlet",
    accommodationAddress: "大阪府泉佐野市りんくう往来北１−７",
    meals: "酒店早餐，闭营晚餐",
    scheduleChange: false
  },
  {
    day: "第八天",
    date: "2025年11月3日（一）",
    location: "关西机场",
    items: [
      { time: "06:00", activity: "酒店早餐", note: "退房" },
      { time: "07:30", activity: "前往 关西KIX机场", note: "" },
      { time: "10:50", activity: "返程 KIX - KUL AAX D7533", note: "" }
    ],
    accommodation: null,
    accommodationAddress: null,
    meals: "酒店早餐",
    notes: "航班：AAX D7533 - 10:50 - 17:15 [7hrs 25mins direct]",
    scheduleChange: false
  }
];

const Itinerary = () => {
  // Function to highlight flight codes
  const highlightFlightCode = (text: string) => {
    // Match pattern like "AAX D7532" or "AAX D7533"
    const flightCodePattern = /(AAX D\d+)/g;
    const parts = text.split(flightCodePattern);
    
    return parts.map((part, index) => {
      if (part.match(flightCodePattern)) {
        return (
          <span 
            key={index} 
            className="inline-block bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded mx-1 border border-accent/30"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              详细行程
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            8天7夜精心编排
          </h2>
          <p className="text-lg text-muted-foreground">
            每一天都是成长与发现的旅程
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {itineraryData.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              {/* Timeline Line */}
              {dayIndex < itineraryData.length - 1 && (
                <div className="absolute left-8 md:left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />
              )}

              {/* Day Card */}
              <div className="itinerary-card mb-12" style={{ animationDelay: `${dayIndex * 0.05}s` }}>
                {/* Day Header */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Day Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg relative z-10">
                      <span className="text-lg md:text-xl font-bold text-white">
                        D{dayIndex}
                      </span>
                    </div>
                  </div>

                  {/* Day Info */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {day.day}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-1">{day.date}</p>
                    <p className="text-primary font-medium">{day.location}</p>
                  </div>
                </div>



                {/* Activities */}
                <div className="space-y-3 mb-6">
                  {day.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                      {item.time && (
                        <div className="flex-shrink-0 w-24">
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {item.time}
                          </span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-foreground mb-1">{item.activity}</p>
                        {item.note && (
                          <div className="text-sm text-muted-foreground whitespace-pre-line pl-4 border-l-2 border-primary/30 mt-2">
                            {highlightFlightCode(item.note)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Accommodation & Meals */}
                {(day.accommodation || day.meals) && (
                  <div className="border-t-2 border-primary/20 pt-5 mt-4 space-y-3 bg-muted/30 p-4 rounded-lg">
                    {day.meals && (
                      <div className="flex items-start gap-3">
                        <span className="font-bold text-foreground text-base bg-accent/20 px-3 py-1 rounded-md min-w-[48px] flex-shrink-0">餐：</span>
                        <span className="text-foreground text-base leading-relaxed">{day.meals}</span>
                      </div>
                    )}
                    {day.accommodation && (
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="font-bold text-foreground text-base bg-primary/20 px-3 py-1 rounded-md min-w-[48px] flex-shrink-0">住：</span>
                          <span className="text-foreground text-base font-semibold leading-relaxed">{day.accommodation}</span>
                        </div>
                        {day.accommodationAddress && (
                          <div className="ml-[72px] text-base text-muted-foreground leading-relaxed">
                            📍 {day.accommodationAddress}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Additional Notes */}
                {day.notes && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground italic">
                      {highlightFlightCode(day.notes)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;