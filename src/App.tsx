import Header from './components/Header';
import Hero from './components/Hero';
import Tutorials from './components/Tutorials';
import Educational from './components/Educational';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Tutorials />
      <Educational />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
