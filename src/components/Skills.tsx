import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Layers, Server, Wrench } from "lucide-react";

const skills = [
  {
    category: "Core Technologies",
    icon: Server,
    items: ["Java", "Spring Boot", "REST APIs"],
    highlight: true,
  },
  {
    category: "Database & Storage",
    icon: Database,
    items: ["MySQL", "JDBC"],
  },
  {
    category: "Development Tools",
    icon: Wrench,
    items: ["Git", "Maven", "JUnit"],
  },
  {
    category: "Frontend",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Concepts & Practices",
    icon: Layers,
    items: ["OOP", "Database Management", "Agile", "SDLC"],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-teal-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise in backend development, with a strong focus on Java and Spring Boot ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                  skill.highlight
                    ? "bg-gradient-to-br from-card to-secondary border-primary shadow-[0_0_20px_hsl(189_95%_52%/0.2)]"
                    : "bg-card/50 border-border hover:border-primary/50"
                }`}
              >
                {skill.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                    Specialty
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${skill.highlight ? "bg-primary/20" : "bg-secondary"}`}>
                    <Icon className={`w-6 h-6 ${skill.highlight ? "text-primary" : "text-foreground"}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        skill.highlight
                          ? "bg-primary/10 text-primary border border-primary/30"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Problem-Solving", "Collaboration", "Adaptability", "Quick Learner"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary text-foreground font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
