import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Your Personal AI Fitness Trainer
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get personalized workout advice and reach your fitness goals with our AI-powered trainer. Available 24/7 to answer your questions and guide your fitness journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Personalized Advice</h3>
                <p className="text-gray-600">Get custom workout plans and nutrition tips tailored to your goals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Ask questions and get guidance whenever you need it.</p>
              </div>
            </div>
            <div className="animate-float">
              <Chatbot />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;