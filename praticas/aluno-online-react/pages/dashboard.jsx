import "./App.css";
import Header from '../components/Header';
import Card from "../components/Card";
import Aside from "../components/Aside";

function App() {
  return <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
    <Aside className="flex-none md:flex-1"/>
    <main className="flex-1 flex-col">
      <Header/>
      <Card/>
      <Card/>
    </main>
  </div>;
}

export default App;
