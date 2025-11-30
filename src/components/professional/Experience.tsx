import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium">Backend Developer — E-Commerce Platform</h3>
            <p className="text-sm text-slate-600">Built RESTful services using Java, Spring Boot, MySQL. Implemented JWT authentication, role-based access and optimized product search queries, reducing response times by 40%.</p>
            <p className="text-xs text-slate-500 mt-1">Jan 2024 — Present</p>
          </div>
          <div>
            <h3 className="font-medium">Software Engineer — Logistics Startup</h3>
            <p className="text-sm text-slate-600">Designed microservices for order processing, integrated with Kafka for event-driven workflows and improved throughput using connection pooling and caching strategies.</p>
            <p className="text-xs text-slate-500 mt-1">Jul 2022 — Dec 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}