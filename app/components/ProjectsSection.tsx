import React from "react";
import Image from "next/image";

const projects = [
  {
    name: "YelpCamp",
    url: "https://yelpcamp-t4or.onrender.com",
    desc: "A full-stack campground listing application with user authentication, image uploads, and map integration.",
    img: "/yelpcamp.png",
    metrics: { performance: 96, accessibility: 98, seo: 100 },
    tech: [
      "User authentication and authorization using Passport.js",
      "Image upload and storage with Cloudinary",
      "Map integration using MapTiler and MapLibre",
      "Tech Stack: Node.js, Express, MongoDB, EJS, Bootstrap, Cloudinary, MapTiler",
    ],
  },
  {
    name: "Imagify",
    url: "https://imagify-frontend-k08e.onrender.com",
    desc: "An AI-powered image transformation app where users can upload, edit, and generate stunning visuals instantly.",
    img: "/imagify.png",
    metrics: { performance: 94, accessibility: 97, seo: 99 },
    tech: [
      "Next.js frontend with TailwindCSS for responsive design",
      "Image uploads & processing with Node.js backend",
      "MongoDB for user data & history storage",
      "AI-powered image editing and transformations",
      "Deployment via Render (frontend + backend)",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid gap-10 lg:gap-16">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#21262D] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_4px_rgba(80,120,255,0.25)] hover:ring-2 hover:ring-blue-400/60 relative"
              style={{ textDecoration: "none" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT SIDE */}
                <div className="p-6 space-y-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    {project.name}
                    <span className="inline-flex items-center justify-center ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-5 h-5 text-blue-400 drop-shadow-glow animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 3h7m0 0v7m0-7L10 14"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 5v14h14v-7"
                        />
                      </svg>
                    </span>
                  </h3>

                  <p className="text-base text-gray-400">{project.desc}</p>

                  {/* METRICS */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-400">
                            {value}
                          </div>
                          <div className="text-sm text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* TECH STACK */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {project.tech.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
