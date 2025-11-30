import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Application",
    description: "Full-featured e-commerce platform with user management, product module, shopping cart, and order handling. Implemented using layered architecture following best practices for scalability and maintainability.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "Layered Architecture"],
    github: "#",
    highlights: ["User Authentication", "Product Management", "Cart System", "Order Processing"],
  },
  {
    title: "Privacy-Preserving Auditing for Cloud Storage",
    description: "Secure file auditing system utilizing advanced cryptographic validation techniques to ensure data integrity and privacy in cloud storage environments. Implements robust security measures for file verification.",
    tech: ["Java", "MySQL", "Cryptography", "Data Integrity"],
    github: "#",
    highlights: ["Cryptographic Validation", "Secure Auditing", "Data Integrity Checks"],
  },
  {
    title: "Student Database Management System",
    description: "Comprehensive CRUD-based management system for student records with intuitive interfaces for adding, updating, deleting, and searching student information. Built with focus on data consistency and user experience.",
    tech: ["Java", "JDBC", "MySQL", "CRUD Operations"],
    github: "#",
    highlights: ["Add Records", "Update Data", "Delete Entries", "Advanced Search"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-teal-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing practical applications of backend development skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-xl bg-gradient-to-br from-card to-secondary backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-teal-accent mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-accent"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-foreground hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-accent/0 to-teal-accent/0 group-hover:from-teal-accent/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
