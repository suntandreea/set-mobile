import Header from './components/Header';
import GridCard from './components/layout/GridCard';
import Hero from './components/layout/Hero';
import MainCard from './components/layout/MainCard';
import MiniCards from './components/layout/MiniCards';
import Newsletter from './components/Newsletter';
import TableCard from './components/table/TableCard';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="f-f f-jc f-aic f-dc">
        <Hero />
        <MainCard />
        <GridCard />
        <MiniCards />
        <TableCard />
      </main>
      <Newsletter />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
