import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "./ui";

interface TeamCard3DProps {
  name: string;
  title: string;
  image: string;
  href: string;
  delay?: number;
}

const TeamCard3D: React.FC<TeamCard3DProps> = ({ name, title, image, href, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageEl = imageRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!card || !imageEl || !content || !glow) return;

    // Initial animation
    gsap.set(card, { 
      rotationY: -90, 
      opacity: 0,
      transformPerspective: 1000,
      transformStyle: "preserve-3d"
    });

    gsap.to(card, {
      rotationY: 0,
      opacity: 1,
      duration: 1.2,
      delay: delay,
      ease: "power3.out"
    });

    // Hover animations
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      });

      // Move glow effect
      gsap.to(glow, {
        x: (x - centerX) * 0.5,
        y: (y - centerY) * 0.5,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(imageEl, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(glow, {
        opacity: 1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
      
      gsap.to(imageEl, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(glow, {
        opacity: 0,
        x: 0,
        y: 0,
        duration: 0.3
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="relative group cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        transform: "translateZ(0)"
      }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 rounded-3xl opacity-90 transform translateZ(-10px)" />
      
      {/* Glow effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(600px circle at center, rgba(16, 185, 129, 0.3), transparent 40%)",
          transform: "translateZ(20px)"
        }}
      />

      {/* Card content */}
      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-0 overflow-hidden shadow-2xl">
        {/* Image container */}
        <div
          ref={imageRef}
          className="w-full aspect-square overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="p-8 text-center relative z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
            {name}
          </h3>
          <p className="text-emerald-100 font-semibold mb-6">
            {title}
          </p>
          
          <Button
            href={href}
            variant="primary"
            size="lg"
            fullWidth
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 font-bold shadow-lg"
          >
            Learn More
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-tr-full transform -translate-x-6 translate-y-6" />
      </div>
    </div>
  );
};

export default TeamCard3D;