import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Mail, Send, Check, MessageSquare, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Contact = () => {
  const { colors } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h2 className={`text-2xl md:text-3xl font-bold ${colors.text}`}>Get In Touch</h2>
          <p className={`text-sm ${colors.textMuted}`}>Feel free to reach out for IT operations, networking, or web development inquiries</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Card */}
        <div className={`p-6 md:p-8 rounded-2xl ${colors.secondary} border ${colors.cardBorder} shadow-sm flex flex-col justify-between`}>
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 w-fit">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold ${colors.text}`}>Direct Email</h3>
            <p className={`text-sm ${colors.textMuted}`}>Primary contact channel for professional correspondence and project opportunities.</p>
            <p className={`text-base font-semibold ${colors.accent} pt-1 break-all`}>arkolachi190@gmail.com</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-6">
            <Button asChild size="default" className="flex-1 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white">
              <Link href="mailto:arkolachi190@gmail.com">
                <Send className="w-4 h-4 mr-1.5" /> Send Message
              </Link>
            </Button>
            <Button
              size="default"
              variant="outline"
              onClick={() => copyToClipboard("arkolachi190@gmail.com")}
              className="text-xs"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500 mr-1" /> Copied!
                </>
              ) : (
                "Copy Address"
              )}
            </Button>
          </div>
        </div>

        {/* Social & Code Profiles Card */}
        <div className={`p-6 md:p-8 rounded-2xl ${colors.secondary} border ${colors.cardBorder} shadow-sm flex flex-col justify-between`}>
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 w-fit">
              <ExternalLink className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold ${colors.text}`}>Professional Profiles</h3>
            <p className={`text-sm ${colors.textMuted}`}>Connect on LinkedIn or explore active open-source projects and code repositories on GitHub.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button asChild size="default" variant="secondary" className="flex-1 gap-2">
              <Link href="https://www.linkedin.com/in/ahsan-raza8hbb/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-4 h-4 text-sky-500" /> LinkedIn Profile
              </Link>
            </Button>
            <Button asChild size="default" variant="outline" className="flex-1 gap-2">
              <Link href="https://github.com/allen9650" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-4 h-4" /> GitHub Repos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

