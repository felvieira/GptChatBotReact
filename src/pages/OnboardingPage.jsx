import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BackIcon, ForwardIcon } from '../utils/icons';

export function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Unlock the Power of Future AI",
      description:
        "Chat with the smartest AI and experience power of AI with us.",
    },
    {
      title: "Learn and Grow with AI",
      description:
        "Expand your knowledge and skills with our advanced AI assistant.",
    },
    {
      title: "Secure and Private Conversations",
      description:
        "Your data is protected with state-of-the-art encryption technology.",
    },
  ];

  const handleGetStarted = () => {
    navigate("/chat");
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleGetStarted(); 
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="flex justify-end mr-8 pt-2">
        <Button
          variant="ghost"
          onClick={handleGetStarted}
          className="text-primary font-poppins text-[18px] font-semibold leading-[27px] text-left"
        >
          Skip
        </Button>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="h-[60%] w-full">
          <img
            src="/images/robot-onboarding.png"
            alt="AI Robot"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gray-50 w-3 h-3"
                  : "bg-gray-400 bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
        <div className="h-[40%] flex flex-col justify-between p-6">
          <div className="text-center">
            <h1 className="text-title-large text-text mb-2">
              {slides[currentSlide].title}
            </h1>
            <p className="text-body-medium text-center text-text-muted">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center bg-background-secondary rounded-[15px] p-2 w-48">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <BackIcon className="h-6 w-6" />
              </Button>
              <div className="w-px h-6 bg-white"></div>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
              >
                <ForwardIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
