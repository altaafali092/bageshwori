import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CategorySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      badge: "JUICY",
      badgeVariant: "destructive",
      title: "Healthy Vegetable Drinks",
      price: "FROM $1.99-$2.99",
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174"
    },
    {
      badge: "FRESH",
      badgeVariant: "default",
      title: "Tropical Fruit Paradise",
      price: "FROM $2.49-$3.49",
      image: "https://images.unsplash.com/photo-1519915028121-7d3463d20e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174"
    },
    {
      badge: "ORGANIC",
      badgeVariant: "secondary",
      title: "Berry Boost Collection",
      price: "FROM $2.99-$3.99",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    {
      badge: "ENERGY",
      badgeVariant: "outline",
      title: "Green Power Smoothies",
      price: "FROM $2.29-$3.29",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50  justify-center">
      <div className="max-w-6xl w-full">
        <div className="relative">
          {/* Carousel Container */}
          <Card className="relative overflow-hidden border-0 shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full"
                >
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 md:p-8 relative overflow-hidden h-96 lg:h-[28rem]">
                    {/* Decorative circles */}
                    <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-48 h-48 bg-emerald-300/30 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                      <Badge variant={slide.badgeVariant as any} className="mb-4 font-bold">
                        {slide.badge}
                      </Badge>

                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {slide.title.split(' ').slice(0, 2).join(' ')}<br />
                        {slide.title.split(' ').slice(2).join(' ')}
                      </h1>

                      <p className="text-emerald-700 text-xl lg:text-2xl font-bold mb-6">
                        {slide.price}
                      </p>

                      <Button 
                        size="lg" 
                        className="bg-white text-gray-700 hover:bg-gray-50 font-semibold rounded-full shadow-md hover:shadow-lg"
                      >
                        Shop Now
                      </Button>
                    </div>

                    {/* Product Image Area */}
                    <div className="absolute bottom-0 right-0 w-2/3">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

            
                   
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            size="icon"
            variant="secondary"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg z-20 bg-white/90 hover:bg-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextSlide}
            size="icon"
            variant="secondary"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg z-20 bg-white/90 hover:bg-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

       
        </div>
      </div>
    </div>
  );
}