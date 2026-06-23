import emailjs from "@emailjs/browser";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Eye,
  ArrowUp,
  Moon,
  Sun,
  ExternalLink,
  Menu,
  X,
  GraduationCap,
  Award,
  Trophy,
  Code2,
  Database,
  Server,
  Wrench,
  Send,
  MapPin,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import projStudents from "@/assets/project-students.jpg";
import projDisaster from "@/assets/project-disaster.jpg";
import projFitness from "@/assets/project-fitness.jpg";
import projDatabase from "@/assets/project-database.jpg";
import { useScrollReveal, useTypingEffect, useTheme } from "@/hooks/use-portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaishali | Software Developer Portfolio" },
      {
        name: "description",
        content:
          "Vaishali — B.Tech IT student & aspiring software developer specializing in Java, Python, Full Stack development and Machine Learning.",
      },
    ],
  }),
  component: Portfolio,
});

const GITHUB = "https://github.com/Vaishali0208";
const LINKEDIN = "https://www.linkedin.com/in/vaishali-vaishali-b222a2286/";
const EMAIL = "vaishaliv9702@gmail.com";
const PHONE = "+91 9080048694";

const NAV = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
] as const;

const SKILLS = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Java", "Python", "Express.js", "Node.js"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "MySQL"],
  },
];

const PROJECTS = [
  {
    title: "Student Management System",
    image: projStudents,
    description:
      "A complete platform to manage student records, enrollment and academic data with an intuitive dashboard and CRUD operations.",
    tech: ["Java", "MySQL", "JDBC"],
  },
  {
    title: "Disaster Fund Management System",
    image: projDisaster,
    description:
      "An application to collect, track and distribute relief funds transparently during disasters with real-time progress tracking.",
    tech: ["Python", "Flask", "MySQL"],
  },
  {
    title: "Health & Fitness Tracker",
    image: projFitness,
    description:
      "A responsive web app featuring a step counter, calorie tracker and sleep log to help users monitor their daily wellness.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Database Management System",
    image: projDatabase,
    description:
      "A structured DBMS project demonstrating relational schema design, normalization, queries and efficient data handling.",
    tech: ["SQL", "MySQL", "ER Modeling"],
  },
];

const CERTS = [
  { name: "Responsive Web Design", provider: "freeCodeCamp", year: "2024" },
  { name: "Git & GitHub", provider: "Coursera", year: "2024" },
  { name: "JavaScript", provider: "Udemy", year: "2024" },
  { name: "Frontend Development", provider: "Simplilearn", year: "2025" },
  { name: "Foundation of Coding Frontend", provider: "Microsoft", year: "2025" },
];

const ACHIEVEMENTS = [
  "Developed multiple academic and personal software projects from concept to deployment.",
  "Strong understanding of DBMS, Operating Systems, Machine Learning and Web Development.",
  "Active learner and dedicated problem solver, always exploring new technologies.",
];

function Portfolio() {
  useScrollReveal();
  const { dark, toggle } = useTheme();
  const typed = useTypingEffect([
    "B.Tech IT Student",
    "Java Developer",
    "Python Developer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
  ]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ambient glow background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden
      />

      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 sm:mx-4 lg:mx-auto">
          <button onClick={() => scrollTo("hero")} className="text-lg font-extrabold tracking-tight">
            <span className="text-gradient">Vaishali</span>
            <span className="text-primary">.</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {NAV.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-secondary"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              className="rounded-lg border border-border p-2 md:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {NAV.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* Hero */}
        <section id="hero" className="flex min-h-screen flex-col items-center justify-center gap-10 pt-28 text-center">
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-full bg-gradient-brand opacity-70 blur-2xl" aria-hidden />
            <div className="absolute -inset-1 animate-spin-slow rounded-full bg-gradient-brand" aria-hidden />
            <img
              src={profileImg}
              alt="Vaishali profile photo"
              width={768}
              height={768}
              className="relative h-44 w-44 rounded-full border-4 border-background object-cover object-top shadow-glow sm:h-52 sm:w-52"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">Hi, I'm</p>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              <span className="text-gradient">Vaishali</span>
            </h1>
            <p className="text-xl font-semibold sm:text-2xl">
              <span className="text-foreground">{typed}</span>
              <span className="cursor-blink ml-0.5 text-primary">|</span>
            </p>
            <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
              I am a passionate B.Tech Information Technology student with a strong interest in Software Development, Web
              Development, Machine Learning, Database Management Systems, and Problem Solving. I enjoy building innovative
              applications and continuously improving my technical and professional skills.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Eye className="h-4 w-4" /> View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </button>
          </div>

          <div className="flex items-center gap-4">
            <SocialIcon href={GITHUB} label="GitHub">
              <Github className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={LINKEDIN} label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={`mailto:${EMAIL}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialIcon>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About Me" eyebrow="Get to know me">
          <div className="reveal glass shadow-card rounded-3xl p-8">
            <ul className="space-y-3">
              {[
                "B.Tech Information Technology student at KGISL Institute of Technology",
                "Strong interest in Software Development and Web Technologies",
                "Passionate about learning new technologies and solving real-world problems",
                "Looking for opportunities to contribute to innovative software projects and grow as a software engineer",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gradient-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Technologies" eyebrow="What I work with">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map(({ title, icon: Icon, items }) => (
              <div
                key={title}
                className="reveal glass shadow-card group rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-brand p-3 text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-semibold">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" eyebrow="Things I've built">
          <div className="grid gap-7 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="reveal glass shadow-card group overflow-hidden rounded-3xl transition-transform hover:-translate-y-1.5"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-1">
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" eyebrow="My academic journey">
          <div className="reveal glass shadow-card flex flex-col gap-5 rounded-3xl p-8 sm:flex-row sm:items-center">
            <div className="inline-flex flex-none rounded-2xl bg-gradient-brand p-4 text-primary-foreground shadow-glow">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Bachelor of Technology — Information Technology</h3>
              <p className="text-muted-foreground">KGISL Institute of Technology, Coimbatore</p>
              <p className="mt-1 text-sm text-muted-foreground">Sep 2023 – May 2027</p>
            </div>
            <span className="self-start rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary sm:self-center">
              Current Student
            </span>
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certifications" title="Certifications" eyebrow="Continuous learning">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c) => (
              <div
                key={c.name}
                className="reveal glass shadow-card flex items-start gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="inline-flex flex-none rounded-xl bg-gradient-brand p-3 text-primary-foreground shadow-glow">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold leading-snug">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.provider}</p>
                  <p className="text-xs text-muted-foreground">{c.year}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Achievements */}
        <Section id="achievements" title="Achievements" eyebrow="Highlights">
          <div className="grid gap-5 md:grid-cols-3">
            {ACHIEVEMENTS.map((a) => (
              <div key={a} className="reveal glass shadow-card rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <Trophy className="mb-3 h-6 w-6 text-primary" />
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Resume */}
        <Section id="resume" title="Resume" eyebrow="My credentials">
          <div className="reveal glass shadow-card flex flex-col items-center gap-5 rounded-3xl p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="max-w-md text-muted-foreground">
              Want the full picture? Download or preview my resume for a detailed look at my experience, projects and
              skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Download
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Eye className="h-4 w-4" /> Preview
              </a>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get In Touch" eyebrow="Let's connect">
          <div className="grid gap-7 md:grid-cols-2">
            <div className="reveal space-y-4">
              <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow icon={Phone} label="Phone" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
              <ContactRow icon={Github} label="GitHub" value="Vaishali0208" href={GITHUB} />
              <ContactRow icon={Linkedin} label="LinkedIn" value="vaishali" href={LINKEDIN} />
              <ContactRow icon={MapPin} label="Location" value="Coimbatore, India" />
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>

           <form
  className="reveal glass shadow-card space-y-4 rounded-3xl p-6"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

const formData = new FormData(form);

const name = formData.get("name");
const email = formData.get("email");
const message = formData.get("message");



    try {
      await emailjs.send(
        "service_k8q6bgp",
        "template_89d69nq",
        {
          name,
          email,
          message,
          title: "Portfolio Contact",
        },
        "M4j0_GJUAxEtZh7bG"
      );

      setSent(true);
      setTimeout(() => setSent(false), 4000);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  }}
>
 <Field label="Name">
  <input
    name="name"
    required
    placeholder="Your name"
    className="field-input"
  />
</Field>

<Field label="Email">
  <input
    name="email"
    required
    type="email"
    placeholder="you@email.com"
    className="field-input"
  />
</Field>

<Field label="Message">
  <textarea
    name="message"
    required
    rows={4}
    placeholder="Your message..."
    className="field-input resize-none"
  />
</Field>


  <button
    type="submit"
    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
  >
    <Send className="h-4 w-4" />
    {sent ? "Message Sent!" : "Send Message"}
  </button>
</form>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center">
          <button onClick={() => scrollTo("hero")} className="text-xl font-extrabold">
            <span className="text-gradient">Vaishali</span>
            <span className="text-primary">.</span>
          </button>
          <div className="flex items-center gap-4">
            <SocialIcon href={GITHUB} label="GitHub">
              <Github className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={LINKEDIN} label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={`mailto:${EMAIL}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialIcon>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vaishali. Built with passion & React.
          </p>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => scrollTo("hero")}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <style>{`
        .field-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.65rem 0.9rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .field-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 25%, transparent);
        }
      `}</style>
    </div>
  );
}

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="reveal mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-brand" />
      </div>
      {children}
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-all hover:-translate-y-1 hover:text-primary hover:shadow-glow"
    >
      {children}
    </a>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="glass shadow-card flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-1">
      <div className="inline-flex flex-none rounded-xl bg-gradient-brand p-3 text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}
