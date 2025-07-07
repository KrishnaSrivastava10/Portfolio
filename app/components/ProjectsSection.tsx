import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Movie Watchlist',
							description: 'Developed a React-based movie app using the OMDb API to search and display movie details.',
							metrics: {
								performance: 98,
								accessibility: 100,
								seo: 100,
							},
							techDetails: [
								'Implemented add/remove movies from Watchlist and mark as Watched using localStorage',
								'Responsive UI with clean design using custom CSS and React Router',
								'Tech Stack: OMDb API, Axios, React Router, localStorage, CSS',
							],
							image: '/movies.png', // Make sure this image is in your public/ folder
							href: 'https://abhinavdayal-moviewatchlist.vercel.app/',
						},
						{
							title: 'Chef Claude',
							description: 'Developed an AI-powered recipe generator using Hugging Face’s Mixtral-8x7B model to create creative dishes from user-input ingredients.',
							metrics: {
								performance: 95,
								accessibility: 98,
								seo: 100,
							},
							techDetails: [
								'Enabled dynamic ingredient input and real-time recipe rendering using clean, formatted Markdown',
								'Implemented secure API token management using Vite environment variables and deployed seamlessly on Vercel',
								'Tech Stack: React, Vite, Tailwind CSS, Hugging Face Inference API',
							],
							image: '/chef.png',
							href: 'https://abhinavdayal-chefclaude.vercel.app/',
						},
						{
							title: 'GSAP Animation',
							description: 'Built a scroll driven cocktail website with advanced GSAP animations including SplitText reveals, parallax scrolling, and ScrollTrigger effects.',
							metrics: {
								performance: 97,
								accessibility: 99,
								seo: 100,
							},
							techDetails: [
								'Implemented pinned sections, scroll synced video playback, and custom animated carousel with seamless timeline animations',
								'Deployed on Vercel with optimized performance for animation-heavy content',
								'Tech Stack : React, GSAP, Tailwind CSS, Vite',
							],
							image: '/gsap.png',
							href: 'https://abhinavdayal-gsapanimation.vercel.app/',
						},
					].map((project) => (
						project.href ? (
							<a
								key={project.title}
								href={project.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group block bg-[#21262D] rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_32px_4px_rgba(80,120,255,0.25)] hover:ring-2 hover:ring-blue-400/60 relative"
								style={{ textDecoration: 'none' }}
							>
								<div className="grid grid-cols-1 lg:grid-cols-2">
									<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
										<h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
											{project.title}
											<span className="inline-flex items-center justify-center ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
												<svg className="w-5 h-5 text-blue-400 drop-shadow-glow animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
													<path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14h14v-7" />
												</svg>
											</span>
										</h3>
										<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

										{/* Performance Metrics */}
										<div className="space-y-3">
											<h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
											<div className="grid grid-cols-3 gap-2 sm:gap-4">
												{Object.entries(project.metrics).map(([key, value]) => (
													<div key={key} className="text-center">
														<div className="text-2xl font-bold text-blue-400">{value}</div>
														<div className="text-sm text-gray-400 capitalize">{key}</div>
													</div>
												))}
											</div>
										</div>

										{/* Technical Implementation */}
										<div>
											<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
												{project.techDetails.map((detail) => (
													<li key={detail} className="flex items-center gap-2">
														<span className="text-green-400">▹</span>
														<span className="text-gray-300">{detail}</span>
													</li>
												))}
											</ul>
										</div>
									</div>

									<div className="relative h-full min-h-[300px] lg:min-h-full">
										<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
										<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
									</div>
								</div>
							</a>
						) : (
							<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
								<div className="grid grid-cols-1 lg:grid-cols-2">
									<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
										<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
										<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

										{/* Performance Metrics */}
										<div className="space-y-3">
											<h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
											<div className="grid grid-cols-3 gap-2 sm:gap-4">
												{Object.entries(project.metrics).map(([key, value]) => (
													<div key={key} className="text-center">
														<div className="text-2xl font-bold text-blue-400">{value}</div>
														<div className="text-sm text-gray-400 capitalize">{key}</div>
													</div>
												))}
											</div>
										</div>

										{/* Technical Implementation */}
										<div>
											<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
												{project.techDetails.map((detail) => (
													<li key={detail} className="flex items-center gap-2">
														<span className="text-green-400">▹</span>
														<span className="text-gray-300">{detail}</span>
													</li>
												))}
											</ul>
										</div>
									</div>

									<div className="relative h-full min-h-[300px] lg:min-h-full">
										<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
										<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
									</div>
								</div>
							</div>
						)
					))}
				</div>
			</div>
		</section>
	);
};
