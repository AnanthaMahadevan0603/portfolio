import React from 'react';

export default function Services(){
  return (
    <section id="services" className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <ul className="list-disc ml-5 text-sm text-slate-700">
          <li>Backend architecture design & implementation</li>
          <li>REST & GraphQL API development</li>
          <li>Microservices & Event-driven systems</li>
          <li>CI/CD pipelines, containerization & cloud deployments</li>
        </ul>
      </div>
    </section>
  );
}