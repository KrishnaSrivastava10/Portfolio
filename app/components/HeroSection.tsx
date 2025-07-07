'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

export const HeroSection = () => {
	const fullName = "Abhinav Dayal";
	const [animatedName, setAnimatedName] = useState("");
	const contentRef = useRef<HTMLDivElement>(null);
	const techRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const threeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let current = 0;
		const interval = setInterval(() => {
			setAnimatedName(fullName.slice(0, current + 1));
			current++;
			if (current === fullName.length) clearInterval(interval);
		}, 80);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (contentRef.current) {
			gsap.fromTo(
				contentRef.current,
				{ opacity: 0, y: 40 },
				{ opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
			);
		}
		if (techRef.current) {
			gsap.to(techRef.current, {
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 1.1,
				ease: 'power2.out',
			});
		}
		if (scrollRef.current) {
			gsap.to(scrollRef.current, {
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 1.7,
				ease: 'power2.out',
			});
		}
	}, []);

	useEffect(() => {
		// Three.js animated glass bubbles background, moved aside from main text
		let renderer: THREE.WebGLRenderer | undefined;
		let scene: THREE.Scene | undefined;
		let camera: THREE.PerspectiveCamera | undefined;
		let animationId: number;
		let bubbles: THREE.Points | undefined;
		if (threeRef.current) {
			const width = threeRef.current.offsetWidth;
			const height = threeRef.current.offsetHeight;
			renderer = new THREE.WebGLRenderer({ alpha: true });
			renderer.setSize(width, height);
			renderer.setClearColor(0x000000, 0); // transparent
			threeRef.current.appendChild(renderer.domElement);

			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
			camera.position.z = 100;

			// Create glass-like bubbles (fewer, more transparent, with blur, and moved to sides)
			const bubbleCount = 18;
			const geometry = new THREE.BufferGeometry();
			const positions = new Float32Array(bubbleCount * 3);
			const sizes = new Float32Array(bubbleCount);
			for (let i = 0; i < bubbleCount; i++) {
				// Place bubbles away from the center (main text area)
				const angle = Math.random() * Math.PI * 2;
				const radius = 70 + Math.random() * 60; // keep away from center
				positions[i * 3] = Math.cos(angle) * radius;
				positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
				positions[i * 3 + 2] = Math.sin(angle) * radius;
				sizes[i] = 18 + Math.random() * 22; // 18-40px
			}
			geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
			geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

			// Glass-like SVG texture (white/blue, more transparent, soft edge)
			const glassTexture = new THREE.TextureLoader().load('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><defs><radialGradient id="g"><stop offset="0%25" stop-color="white" stop-opacity="0.7"/><stop offset="70%25" stop-color="%237dd3fc" stop-opacity="0.18"/><stop offset="100%25" stop-color="white" stop-opacity="0.05"/></radialGradient></defs><circle cx="32" cy="32" r="30" fill="url(%23g)"/></svg>');
			const material = new THREE.PointsMaterial({ 
				color: 0xffffff, 
				size: 32, 
				map: glassTexture, 
				transparent: true, 
				opacity: 0.22, 
				alphaTest: 0.01,
				depthWrite: false
			});
			bubbles = new THREE.Points(geometry, material);
			scene.add(bubbles);

			const animate = () => {
				if (bubbles) {
					bubbles.rotation.y += 0.0005;
					bubbles.rotation.x += 0.0002;
				}
				renderer!.render(scene!, camera!);
				animationId = requestAnimationFrame(animate);
			};
			animate();
		}
		return () => {
			if (renderer && renderer.domElement && threeRef.current) {
				threeRef.current.removeChild(renderer.domElement);
			}
			if (animationId) cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Fading Gradient Overlay (top and bottom) */}
			<div className="absolute inset-0 z-10 pointer-events-none">
				<div className="w-full h-full bg-gradient-to-b from-[#0D1117]/90 via-[#0D1117]/60 to-transparent"></div>
				{/* Stronger fade at the bottom to blend with next section */}
				<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#161B22]" />
			</div>
			{/* Animated Background Grid */}
			<div className="absolute inset-0 grid-background opacity-20 z-0">
				<div className="grid-overlay animate-pulse-slow"></div>
			</div>

			{/* Floating Tech Icons */}
			<div className="absolute inset-0 overflow-hidden">
				{[
					{ icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },
					{ icon: '🚀', delay: '2s', position: 'top-40 right-1/3' },
					{ icon: '💻', delay: '1s', position: 'bottom-32 left-1/3' },
					{ icon: '🔥', delay: '3s', position: 'bottom-20 right-1/4' },
				].map((item, index) => (
					<div key={index} className={`absolute ${item.position} animate-float opacity-50`} style={{ animationDelay: item.delay }}>
						<span className="text-4xl">{item.icon}</span>
					</div>
				))}
			</div>

			{/* Hero Content */}
			<div ref={contentRef} className="relative z-20 max-w-5xl mx-auto px-4">
				<div className="text-center space-y-6">
					{/* Name Section */}
					<div className="relative inline-block px-4 sm:px-0">
						<div className="absolute inset-0 w-full h-full rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-[0_4px_32px_0_rgba(80,120,255,0.15)]"></div>
						<h1 className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2 flex items-center justify-center drop-shadow-[0_2px_12px_rgba(80,120,255,0.18)]">
							<span className="mr-3 sm:mr-4 text-2xl sm:text-4xl font-semibold">Hey<span className="ml-1" role="img" aria-label="waving hand">👋</span> I&apos;m {animatedName}</span>
						</h1>
					</div>

					{/* Role & Description */}
					<div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-3">
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
								<h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-400">Software Developer</h2>
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
							</div>
							<p className="text-base sm:text-lg text-gray-400 max-w-2xl px-4 sm:px-0">
								Crafting exceptional digital experiences with modern web technologies
							</p>
						</div>

						{/* Tech Stack Pills */}
						<div ref={techRef} className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0 opacity-0">
							{['React', 'TypeScript', 'Node.js', 'Three.js', 'GSAP'].map((tech) => (
								<span
									key={tech}
									className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
						<a href="#work" className="group relative inline-flex items-center justify-center button-animate transition-transform duration-200">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
							<span className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
								View My Work
								<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</span>
						</a>
						<a
							href="#contact"
							className="px-6 sm:px-8 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center button-animate transition-transform duration-200"
						>
							Get in Touch
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
						{[
							{ name: 'GitHub', icon: '🐙', href: '#' },
							{ name: 'LinkedIn', icon: '💼', href: '#' },
							{ name: 'Twitter', icon: '🐦', href: '#' },
							{ name: 'Blog', icon: '✍️', href: '#' },
						].map((social) => (
							<a key={social.name} href={social.href} className="group relative p-2 sm:p-3 hover:text-blue-400 transition-colors" aria-label={social.name}>
								<span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform inline-block">{social.icon}</span>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div ref={scrollRef} className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce opacity-0">
				<span className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
				<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>

			{/* Three.js Animated Particles Background */}
			<div ref={threeRef} className="absolute inset-0 z-0 pointer-events-none" />
		</div>
	);
};
