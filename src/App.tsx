import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#13072A] text-white font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
