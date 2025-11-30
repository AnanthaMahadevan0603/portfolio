import React from 'react';

const stack = [
  'Java', 'Spring Boot', 'REST APIs', 'MySQL/Postgres', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Kafka', 'RabbitMQ', 'Git'
];

export default function TechStack(){
  return (
    <section id="tech" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map(s => (
            <span key={s} className="px-3 py-1 border rounded text-sm bg-white">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}