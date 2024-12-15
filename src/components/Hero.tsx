import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          Elevate Your Game
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Discover premium sports gear for champions
        </p>
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-white animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};