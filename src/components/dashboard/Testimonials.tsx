import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/context/ThemeContext";
import { MessageSquareQuote, Quote } from "lucide-react";

const ENDORSEMENTS = [
  {
    quote:
      "Ahsan demonstrated exceptional technical and problem-solving skills in our AI and networking projects, consistently architecting innovative, dependable solutions under tight deadlines.",
    author: "Project Supervisor",
    role: "Department of Computer Science, SALU",
    colorKey: "pastelSky" as const,
  },
  {
    quote:
      "A dedicated IT professional with a strong grasp of network architecture, structured cabling, and system troubleshooting. Ahsan communicates technical concepts with remarkable clarity.",
    author: "Senior Colleague / Lead",
    role: "IT & Educational Systems",
    colorKey: "pastelPurple" as const,
  },
];

const Testimonials = () => {
  const { colors } = useTheme();

  return (
    <section id="testimonials" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
          <MessageSquareQuote className="w-6 h-6" />
        </div>
        <div>
          <h2 className={`text-2xl md:text-3xl font-bold ${colors.text}`}>Endorsements & Recommendations</h2>
          <p className={`text-sm ${colors.textMuted}`}>Testimonials from academic supervisors and collaborators</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ENDORSEMENTS.map((item, idx) => {
          const badgeStyle = colors[item.colorKey];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card
                className={`${colors.secondary} border ${colors.cardBorder} shadow-sm relative overflow-hidden h-full flex flex-col justify-between`}
              >
                <CardContent className="p-7 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className={`p-2.5 rounded-xl ${badgeStyle.bg} ${badgeStyle.text} w-fit`}>
                      <Quote className="w-5 h-5" />
                    </div>
                    <blockquote className="space-y-4">
                      <p className={`text-base italic ${colors.text} leading-relaxed`}>
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </blockquote>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-500/10">
                    <p className={`font-semibold ${colors.text} text-sm`}>{item.author}</p>
                    <p className={`text-xs ${colors.textMuted}`}>{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;