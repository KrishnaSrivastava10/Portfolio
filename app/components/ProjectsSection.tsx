
import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Project</h2>
				<a
					href="https://yelpcamp-t4or.onrender.com" // Replace with your actual Render URL
					target="_blank"
					rel="noopener noreferrer"
					className="group block bg-[#21262D] rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_32px_4px_rgba(80,120,255,0.25)] hover:ring-2 hover:ring-blue-400/60 relative"
					style={{ textDecoration: 'none' }}
				>
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
							<h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
								YelpCamp
								<span className="inline-flex items-center justify-center ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
									<svg className="w-5 h-5 text-blue-400 drop-shadow-glow animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14h14v-7" />
									</svg>
								</span>
							</h3>
							<p className="text-sm sm:text-base text-gray-400">
								A full-stack campground listing application with user authentication, image uploads, and map integration.
							</p>

							<div className="space-y-3">
								<h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
								<div className="grid grid-cols-3 gap-2 sm:gap-4">
									{[
										{ key: 'performance', value: 96 },
										{ key: 'accessibility', value: 98 },
										{ key: 'seo', value: 100 },
									].map(({ key, value }) => (
										<div key={key} className="text-center">
											<div className="text-2xl font-bold text-blue-400">{value}</div>
											<div className="text-sm text-gray-400 capitalize">{key}</div>
										</div>
									))}
								</div>
							</div>

							<div>
								<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
								<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
									{[
										'User authentication and authorization using Passport.js',
										'Image upload and storage with Cloudinary',
										'Map integration using MapTiler and MapLibre with custom popups and clustering',
										'Tech Stack: Node.js, Express, MongoDB, EJS, Bootstrap, Cloudinary, MapTiler'
									].map((detail) => (
										<li key={detail} className="flex items-center gap-2">
											<span className="text-green-400">▹</span>
											<span className="text-gray-300">{detail}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="relative h-full min-h-[300px] lg:min-h-full">
							<Image
								src="/yelpcamp.png" // Place this image inside your public/ folder
								alt="YelpCamp"
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
						</div>
					</div>
				</a>
			</div>
		</section>
	);
};
