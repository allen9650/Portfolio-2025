import { useTheme } from "@/context/ThemeContext";
import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Turkish Maarif Foundation",
    role: "Information Technology Officer",
    period: "September 2025 – Present",
    colorKey: "pastelSky" as const,
    highlights: [
      "Manage and maintain enterprise IT infrastructure to ensure reliable network and system operations.",
      "Configure, monitor, and troubleshoot enterprise-level LAN/WAN networks, routers, switches, wireless access points, and IP cameras.",
      "Oversee and support biometric attendance systems, workstations, printers, and core IT peripherals.",
      "Ensure stable internet connectivity, perform routine hardware/software maintenance, and manage IT inventory and technical documentation.",
      "Deliver proactive L1 and L2 technical support to staff, swiftly resolving network and system issues.",
    ],
    tags: ["Network Administration", "LAN/WAN", "Cisco Routing & Switching", "System Support", "Firewall & Security"],
  },
  {
    company: "Fiverr",
    role: "Software Engineer / Freelancer",
    period: "July 2023 – Present",
    colorKey: "pastelEmerald" as const,
    highlights: [
      "Develop and deploy modern, responsive full-stack web applications with Next.js, React, and Python.",
      "Integrate Google Generative AI / LLMs and speech recognition models into interactive client platforms.",
      "Build secure authentication, robust RESTful APIs, and responsive, accessible UI components.",
    ],
    tags: ["Next.js", "Python", "LLMs & AI", "REST APIs", "Tailwind CSS"],
  },
  {
    company: "Microsoft Institute KHP",
    role: "IT Instructor & Support Technician",
    period: "November 2021 – August 2025",
    colorKey: "pastelPurple" as const,
    highlights: [
      "Instructed courses in programming, networking fundamentals, system design, Oracle DB, and ICT.",
      "Mentored students on real-world implementations of the OSI model, networking setups, and practical problem-solving.",
      "Maintained IT lab hardware, OS/software setups, multi-AP Wi-Fi network extensions, and performed CAT structured cabling.",
    ],
    tags: ["IT Instruction", "Networking Fundamentals", "CAT Cabling", "Oracle DB", "System Maintenance"],
  },
];

const Experience = () => {
  const { colors } = useTheme();

  return (
    <section id="experience" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-500">
          <Briefcase className="w-6 h-6" />
        </div>
        <div>
          <h2 className={`text-2xl md:text-3xl font-bold ${colors.text}`}>Work Experience</h2>
          <p className={`text-sm ${colors.textMuted}`}>Professional background & IT operations</p>
        </div>
      </div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, idx) => {
          const badgeStyle = colors[exp.colorKey];

          return (
            <div
              key={idx}
              className={`p-6 md:p-8 rounded-2xl ${colors.secondary} border ${colors.cardBorder} shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden`}
            >
              {/* Pastel accent border indicator */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  exp.colorKey === "pastelSky"
                    ? "bg-sky-400"
                    : exp.colorKey === "pastelEmerald"
                    ? "bg-emerald-400"
                    : "bg-purple-400"
                }`}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`text-xl font-bold ${colors.text}`}>{exp.role}</h3>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${badgeStyle.bg} ${badgeStyle.border} ${badgeStyle.text} border`}
                    >
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-5">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                    <span className={colors.text}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-500/10">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-lg ${badgeStyle.bg} ${badgeStyle.text} font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

