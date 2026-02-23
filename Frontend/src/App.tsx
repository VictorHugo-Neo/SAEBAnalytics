import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/UI/Hero';
import { AboutDetails } from './components/UI/AboutDetails';
import { PowerBIEmbed } from './components/Dashboard/PowerBIEmbed';
import { InsightCards } from './components/Dashboard/InsightCards';
function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />

        <div id="dashboard" className="py-12 bg-white">
          <PowerBIEmbed
            embedUrl="https://app.powerbi.com/view?r=eyJrIjoiMTk5ODQ0MTctZjY3Mi00M2UzLThkOTQtZTdmNTIwMDVhNTZkIiwidCI6ImM1MWY5ZjVkLTFjNjgtNDRkOS05NGUxLWYzNzlmMzNjZGYzMCJ9"
            title="SAEB Analytics"
          />
        </div>
        <div id="AboutDetails">
          <AboutDetails />
        </div>
        <InsightCards />
      </main>
      <footer className="py-12 text-center text-slate-400 border-t bg-white">
        SAEB Analytics © 2026 | Projeto Pessoal Acadêmico
      </footer>
    </div>
  );
}
export default App;