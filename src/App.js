import React from "react";
import { Card, CardContent } from "react-ui-cards";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Macro Of Exile",
    description:
      "Macro Engine is an in-progress automation tool that allows users to define macros as graphs of interconnected steps, stored in a JSON format. It supports variable handling and basic operations such as addition and string appending. To ensure compatibility across all applications, it utilizes kernel-level drivers to send input directly to the operating system. This project focuses on flexibility, low-level control, and a visual approach to macro creation. Planned future development includes a website for sharing macros, support for custom plugins to introduce new types of steps, visual graph-based macro editing, and an assembler-like language for advanced users to write macros quickly and efficiently.",
  },
  {
    title: "Galaxy Creator",
    description:
      "Galaxy Creator is a highly configurable asset designed for simulating dynamic galactic systems. Ideal for game developers who want to feature procedural galaxies in their games, this asset supports the creation of galaxies containing thousands of orbiting stars. Each star can host multiple planets and asteroid belts, with optional planetary rings. The system is fully extendable, compatible with all render pipelines, and offers a wide array of customization options for seamless integration into any project.",
    video: "https://www.youtube.com/embed/5QsrLOUXoJA",
  },
  {
    title: "Download Guard",
    description:
      "Download Guard is a simple client-server tool developed using ASP.NET for the backend and C++/Qt for the frontend. It allows users to broadcast their current download activity status with a single click, helping others on the same network coordinate internet usage. Ideal for shared environments, it offers straightforward functionality with minimal overhead.",
  },
  {
    title: "BrightWeather",
    description:
      "BrightWeather is a lightweight desktop weather application built using native WinAPI in C++. Developed as a personal challenge, it avoids external frameworks and relies solely on low-level system mechanisms. The app offers real-time weather updates through a clean and efficient interface, emphasizing performance, simplicity, and minimal resource usage.",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <section className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-slate-500">
            Patryk Łazowski
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I’m a backend-focused software engineer with a strong foundation in
            C#, Java, and C++, dedicated to building robust and efficient
            systems. Beyond my professional experience, I like to develop low
            level code. I thrive on clean code, system optimization, and
            creating scalable backend solutions.
          </p>
        </motion.header>

        <section className="bg-gray-900 text-gray-300 p-8 rounded-md max-w-md mx-auto mb-20 shadow-lg">
          <h2 className="text-2xl font-semibold mb-5 text-white">Contact</h2>
          <ul className="space-y-3 text-base">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:jakosziewski@gmail.com"
                className="text-blue-400 hover:underline"
              >
                jakosziewski@gmail.com
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Luminatione"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/Luminatione
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/patryk-lazowski/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/patryk-lazowski/
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-blue-300 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-blue-500/40 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="bg-transparent border-none">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-blue-200 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    {project.video && (
                      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          className="w-full h-48"
                          src={project.video}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-32 mb-8">
          &copy; {new Date().getFullYear()} Patryk Łazowski. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
