import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/context/ThemeContext";
import { Award } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Google Prompting Essentials",
    org: "Google via Coursera",
    date: "Jun 2025",
    colorKey: "pastelSky" as const,
  },
  {
    title: "VU-ITU-DTC Cyber Threat Management",
    org: "Virtual University & Cisco Network Academy",
    date: "Jun 2025",
    colorKey: "pastelEmerald" as const,
  },
  {
    title: "Cybersecurity Essentials",
    org: "Cisco Network Academy",
    date: "Mar 2025",
    colorKey: "pastelPurple" as const,
  },
  {
    title: "Elements of AI",
    org: "University of Helsinki",
    date: "Jan 2025",
    colorKey: "pastelAmber" as const,
  },
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Network Academy",
    date: "Dec 2024",
    colorKey: "pastelRose" as const,
  },
  {
    title: "Game Development",
    org: "NAVTTC (National Vocational & Technical Training Commission)",
    date: "Sep 2024",
    colorKey: "pastelIndigo" as const,
  },
  {
    title: "Web Engineering Bootcamp",
    org: "Sukkur IBA IET",
    date: "Jun 2024",
    colorKey: "pastelSky" as const,
  },
  {
    title: "Technical Domain: Web Development Training",
    org: "National Freelance Training Program (NFTP)",
    date: "Mar 2024",
    colorKey: "pastelEmerald" as const,
  },
];

const Certifications = () => {
  const { colors } = useTheme();

  return (
    <section id="certifications" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <h2 className={`text-2xl md:text-3xl font-bold ${colors.text}`}>Certifications & Credentials</h2>
          <p className={`text-sm ${colors.textMuted}`}>Verified professional credentials and training milestones</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATES.map((cert, i) => {
          const badgeStyle = colors[cert.colorKey];

          return (
            <Card
              key={i}
              className={`${colors.secondary} border ${colors.cardBorder} shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
            >
              <CardContent className="p-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`p-2 rounded-lg ${badgeStyle.bg} ${badgeStyle.text}`}>
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className={`text-sm font-bold ${colors.text} mb-1.5 leading-snug`}>
                    {cert.title}
                  </h3>
                </div>
                <p className={`text-xs ${badgeStyle.text} font-medium mt-2 pt-2 border-t border-slate-500/10`}>
                  {cert.org}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;