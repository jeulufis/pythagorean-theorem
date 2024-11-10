import "./App.css";
import Footer from "./components/footer";
import NotaPitagoras from "./components/nota-pitagoras";

import TeoremaPitagoras from "./components/teorema-pitagoras";

function App() {
  
  return (
    <main className="bg-[#EEEEEE]">
      <section className="px-5 flex items-center justify-center h-screen ">
        <div className="space-y-2">
          <h1 className="text-5xl rampart-one-regular text-[#000000]">Teorema de Pitágoras?</h1>
          <p className="font-light w-3/4 pt-2">
            El teorema de Pitágoras establece que, en un triángulo rectángulo,
            el cuadrado de la longitud de la hipotenusa (el lado opuesto al
            ángulo recto) es igual a la suma de los cuadrados de las longitudes
            de los otros dos lados. En fórmula:
          </p>
          <p className="text-xl font-light md:text-2xl pt-3">
            a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
          </p>
        </div>
      </section>
      <hr className="h-px my-8 border-0 bg-gray-400" />
      <TeoremaPitagoras />
      <hr className="h-px my-8 border-0 bg-gray-400" />
      <NotaPitagoras />
      <Footer />
    </main>
  );
}

export default App;
