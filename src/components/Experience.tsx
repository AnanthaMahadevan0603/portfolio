import { motion } from "framer-motion";
import { Briefcase, Code, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Back-End Developer Intern",
    company: "Brainery Spot Technology",
    location: "Coimbatore",
    period: "Aug 2024 - Oct 2024",
    type: "Internship",
    description: [
      "Built robust REST APIs using Java and Spring Boot framework",
      "Handled complex data operations and database management",
      "Debugged and optimized backend modules for improved performance",
      "Collaborated with team members using Agile methodologies",
    ],
    tech: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "3D Effect Conceptualization",
    company: "Framework Project - Meta Spark Studio",
    location: "Remote",
    period: "Nov 2024 - Dec 2024",
    type: "Project",
    description: [
      "Designed and conceptualized 3D/AR visual effects",
      "Applied PEAR framework principles for effect development",
      "Created immersive augmented reality experiences",
      "Integrated creative design with technical implementation",
    ],
    tech: ["Meta Spark Studio", "3D Design", "AR Development"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-teal-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on experience in backend development and creative technology projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(189_95%_52%/0.5)] z-10" />

                <div className="ml-16 md:ml-0">
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-br from-card to-secondary backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    {/* Type Badge */}
                    <div className={`flex gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/30">
                        <Briefcase className="w-3 h-3" />
                        {exp.type}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-teal-accent transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-1">{exp.company}</p>
                    <div className={`flex flex-wrap gap-3 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span>• {exp.location}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-teal-accent">Education</span>
          </h3>
          <div className="p-6 rounded-xl bg-gradient-to-br from-card to-secondary backdrop-blur-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1">Bachelor of Engineering (Computer Science and Engineering)</h4>
                <p className="text-muted-foreground mb-2">Mohamed Sathak Engineering College, Kilakarai</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    2021 - 2025
                  </span>
                  <span className="font-semibold text-teal-accent">CGPA: 8.1</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center"
        >
          <h4 className="text-xl font-semibold mb-4">Certifications</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 rounded-full bg-secondary text-foreground font-medium">
              TCS ION NQT [60%]
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary text-foreground font-medium">
              Full Stack Development - TNSDC
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
