import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "About Me",
    content:
      "Hello, I'm Stefen Sutandi, a dedicated student at ITB with a passion for data analysis, programming, and computational thinking. I have experience as a Computational Thinking Lab Assistant, guiding over 250 students in learning Python and problem-solving.",
  },
  {
    title: "Projects",
    content: (
      <ul className="list-disc pl-5">
        <li>Data Analysis using Python and Pandas for student projects</li>
        <li>ESP32 Projects: Digital Clock with FreeRTOS & LED Control System</li>
        <li>Linear System Simulation in MATLAB for Separator Modeling</li>
        <li>VHDL Modules for MIPS32 Design in EL3011</li>
      </ul>
    ),
  },
  {
    title: "Organizational Experience",
    content: (
      <ul className="list-disc pl-5">
        <li>Wakil Ketua Publikasi Spark.ITB Datathon</li>
        <li>Internal Coordinator KMB ITB Events</li>
        <li>Logistics Team for OlympIAE ITB</li>
      </ul>
    ),
  },
  {
    title: "Contact",
    content: (
      <div>
        <p>Email: stefen.sutandi@example.com</p>
        <p>GitHub: <a href="https://github.com/StefenSutandi" target="_blank" className="text-blue-500 underline">https://github.com/StefenSutandi</a></p>
        <p>LinkedIn: <a href="#" className="text-blue-500 underline">Coming Soon</a></p>
      </div>
    ),
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10">Stefen Sutandi's Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <Card key={index} className="rounded-2xl shadow-xl p-5">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <div className="text-base">{section.content}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-2xl shadow-md">View More on GitHub</Button>
      </div>
    </div>
  );
}
