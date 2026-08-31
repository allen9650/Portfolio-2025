import { useTheme } from "@/context/ThemeContext";
import { Network, Server, Code2, ShieldCheck } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    category: "Networking & Infrastructure",
    icon: Network,
    colorKey: "pastelSky" as const,
    skills: [
      "Network Troubleshooting",
      "Enterprise LAN / WAN",
      "Routers & Switches Setup",
      "Wireless APs & IP Cameras",
      "IP Addressing & Subnetting",
      "Firewall Deployment",
      "CAT Cabling & Wiring",
      "Cisco Packet Tracer",
      "OSI Model Architecture",
    ],
  },
  {
    category: "IT Support & Operations",
    icon: Server,
    colorKey: "pastelEmerald" as const,
    skills: [
      "L1 & L2 User Support",
      "Hardware Diagnostics",
      "Biometric Systems",
      "Printers & Workstations",
      "Asset & Inventory Records",
      "Technical Documentation",
      "IT Essentials & ICT Instruction",
      "Lesson Planning",
    ],
  },
  {
    category: "Full-Stack Web Development",
    icon: Code2,
    colorKey: "pastelPurple" as const,
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "RESTful APIs",
      "OAuth Authentication",
      "Oracle DB & MongoDB",
      "Framer Motion",
    ],
  },
  {
    category: "AI & Cybersecurity",
    icon: ShieldCheck,
    colorKey: "pastelRose" as const,
    skills: [
      "Google AI & LLM Integration",
      "Prompt Engineering",
      "Cyber Threat Management",
      "Cybersecurity Essentials",
      "Vosk Speech Recognition",
      "AI Assistant Architecture",
      "Incident Resolution",
    ],
  },
];

const Skills = () => {
  const { colors } = useTheme();

  return (
    <section id="skills" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
          <Code2 className="w-6 h-6" />
        </div>
        <div>
          <h2 className={`text-2xl md:text-3xl font-bold ${colors.text}`}>Technical Skills & Expertise</h2>
          <p className={`text-sm ${colors.textMuted}`}>Core competencies in networking, systems, and development</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map(({ category, icon: Icon, colorKey, skills }) => {
          const badgeStyle = colors[colorKey];

          return (
            <div
              key={category}
              className={`p-6 rounded-2xl ${colors.secondary} border ${colors.cardBorder} shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden`}
            >
              {/* Pastel indicator stripe */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  colorKey === "pastelSky"
                    ? "bg-sky-400"
                    : colorKey === "pastelEmerald"
                    ? "bg-emerald-400"
                    : colorKey === "pastelPurple"
                    ? "bg-purple-400"
                    : "bg-rose-400"
                }`}
              />

              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`p-2 rounded-lg ${badgeStyle.bg} ${badgeStyle.text}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-base font-bold ${colors.text} leading-tight`}>{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${badgeStyle.bg} ${badgeStyle.text} border ${badgeStyle.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;