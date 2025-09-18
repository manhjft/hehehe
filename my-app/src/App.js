import Header from "./components/Header";
import Footer from "./components/Footer";
import ObjectsPage from "./pages/ObjectsPage";
import SubjectsPage from "./pages/SubjectsPage";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2 className="text-center text-2xl font-bold my-6">
          Who Should Learn Programming?
        </h2>
        <ObjectsPage />

        <h2 className="text-center text-2xl font-bold my-6">
          What is the Course Program?
        </h2>
        <SubjectsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
