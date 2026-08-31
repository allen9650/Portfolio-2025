import { Trophy, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ACHIEVEMENTS = [
  {
    text: "Managed and secured enterprise IT infrastructure, LAN/WAN networks, and wireless APs at Turkish Maarif Foundation.",
    category: "IT & Infrastructure",
    colorKey: "pastelSky" as const,
  },
  {
    text: "Delivered hands-on IT and networking instruction at Microsoft Institute KHP, teaching OSI models and structured CAT cabling.",
    category: "Instruction & Mentorship",
    colorKey: "pastelPurple" as const,
  },
  {
    text: "Architected AI-Powered Legal Aid Assistant with Google AI, OAuth, and real-time conversational intelligence.",
    category: "AI & Full-Stack",
    colorKey: "pastelEmerald" as const,
  },
  {
    text: "Improved AI response accuracy by 40% through systematic prompt engineering and model optimization.",
    category: "AI Optimization",
    colorKey: "pastelAmber" as const,
  },
  {
    text: "Developed offline-capable Adalynn AI assistant with Vosk speech recognition and multi-threaded processing.",
    category: "Speech AI & Systems",
    colorKey: "pastelRose" as const,
  },
  {
    text: "Delivered rapid L1 & L2 technical support, maintaining high system reliability and swift issue resolution.",
    category: "Technical Support",
    colorKey: "pastelIndigo" as const,
  },
];

const Achievements = () => {
  const { colors } = useTheme();

  return (
    <section id="achievements" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
          <Trophy className="w-6 h-6" />
        </div>
        <div>
          <h2 className={`text-2xl md:text-3xl font-bold ${colors.text}`}>Key Achievements & Highlights</h2>
          <p className={`text-sm ${colors.textMuted}`}>Impactful milestones across IT administration, instruction, and software development</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((item, i) => {
          const badgeStyle = colors[item.colorKey];

          return (
            <div
              key={i}
              className={`flex flex-col justify-between p-6 rounded-2xl ${colors.secondary} border ${colors.cardBorder} shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${badgeStyle.bg} ${badgeStyle.border} ${badgeStyle.text} border`}>
                    {item.category}
                  </span>
                  <CheckCircle2 className={`w-4 h-4 ${badgeStyle.text}`} />
                </div>
                <p className={`text-sm ${colors.text} leading-relaxed font-normal`}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;