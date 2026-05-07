import React from 'react'
import Button from '../components/Button';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import AnimatedBorderButton from '../components/AnimatedBorderButton';
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import ProfilePic from '../assets/mypic1.jpg'

const skills = [
    "Figma",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Vercel",
    "Tailwind CSS",
    "Git",
];

const Home = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
        

      {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
            <div
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                backgroundColor: "#4083A8",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${
                    15 + Math.random() * 20
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                }}
            />
            ))}
        </div>

      {/* Content */}
            <div className="container mx-auto px-6 pt-40 pb-20 relative z-10">
                <div className="gap-6 items-center">
                {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                UI/UX Designer • React Specialist
                            </span>
                        </div>

                    {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in animation-delay-100 text-center">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with &nbsp;
                                
                                <span className="font-serif italic font-normal text-white">
                                    precision.
                                </span>
                            </h1>
                            
                        </div>

                {/* CTAs */}
                    <div className="container flex flex-wrap gap-4 animate-fade-in animation-delay-300 md:justify-between py-8">
                        <p className="text-2xl leading-10 text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                        Hi, I'm Vadney Da Silva — a UI/UX Designer specializing in
                        React, Next.js, and TypeScript. I build scalable, performant web
                        applications that users enjoy.
                        </p>
                        <div className='flex flex-col-reverse gap-4'>
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </div>
                        
                    </div>

                {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me: </span>
                        {[
                            { icon: BsGithub, href: "https://github.com/YendavAvlis" },
                            { icon: BsLinkedin, href: "https://www.linkedin.com/in/vadney-da-silva/" },
                            { icon: BsTwitterX, href: "#" },
                        ].map((social, idx) => (
                            <a
                            key={idx}
                            href={social.href}
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            target='_blank'
                            >
                            {<social.icon className="w-5 h-5" />}
                            </a>
                        ))}
                    </div>
            </div>
          {/* Right Column - Profile Image */}
            <div className="absolute right-30 bottom-90 md:right-25 md:bottom-85 lg:right-10 lg:bottom-190 animate-fade-in animation-delay-300">
                {/* Profile Image */}
                <div className="relative max-w-md mx-auto">
                    <div
                        className="absolute inset-0 
                    rounded-3xl bg-gradient-to-br 
                    from-primary/15 via-transparent 
                    to-primary/5 blur-2xl animate-pulse"
                    />
                    <div className="relative flex items-center justify-center glass h-36 w-36 rounded-full p-2 glow-border">
                        
                        <div class="flex items-center justify-center h-32 w-32 rounded-full bg-gray-200 overflow-hidden">
                            <img src={ProfilePic} alt="Profile" class="h-full w-full object-cover" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-24 glass rounded-xl px-3 py-2 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium">
                                Available for work
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
                Tools & Technologies I work with
            </p>
            <div className="relative overflow-hidden">
                <div
                className="absolute left-0 top-0 bottom-0 w-32
                bg-gradient-to-r from-background to-transparent z-10"
                />
                <div
                className="absolute right-0 top-0 bottom-0 w-32
                bg-gradient-to-l from-background to-transparent z-10"
                />
                <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                    <div key={idx} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                        {skill}
                    </span>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>

        <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
        >
            <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
        </section>
    )
}

export default Home