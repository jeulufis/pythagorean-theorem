import { useState } from "react";

export default function TeoremaPitagoras() {
  const [catetoA, setCatetoA] = useState(null);
  const [catetoB, setCatetoB] = useState(null);
  const [hipotenusa, setHipotenusa] = useState(null);

  const calcularHipotenusa = (e) => {
    e.preventDefault();
    const a = parseFloat(catetoA);
    const b = parseFloat(catetoB);

    if (isNaN(a) || isNaN(b)) {
      alert("Por favor, ingrese números válidos para ambos catetos.");
      return;
    }

    if (catetoA == 0 || catetoB == 0) {
        alert("Necesitas un cateto mayor a");
        return;
      }
    const c = Math.sqrt(a * a + b * b);
    setHipotenusa(parseFloat(c.toFixed(2)));
  };

  return (
    <section className="md:h-screen flex items-center justify-center h-full p-28">
      <div>
        <form onSubmit={calcularHipotenusa}>
          <h2 className="text-5xl rampart-one-regular">Teorema de Pítagoras</h2>
          <p className="text-sm pt-2 pb-6">Saca el calculo de manera rapida y sencilla</p>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
            <div className="flex flex-col text-xl font-light space-y-2">
              <label htmlFor="" className="font-light">Cateto A:</label><span className="text-xs">(metros)</span>
              <input
                id="catetoA"
                type="number"
                className="p-2"
                value={catetoA}
                onChange={(e) => setCatetoA(e.target.value)}
                placeholder="Longitud"
                required
              />
            </div>

            <div className="flex flex-col text-xl font-light space-y-2">
              <label htmlFor="" className="font-light">Cateto B:</label> <span className="text-xs">(metros)</span>
              <input
                id="catetoB"
                type="number"
                className="p-2"
                value={catetoB}
                onChange={(e) => setCatetoB(e.target.value)}
                placeholder="Longitud"
                required
              />
            </div>
          </div>
          <button className="bg-[#fff] px-3 py-1.5 mt-4 hover:bg-slate-50">
            Calcular Hipotenusa
          </button>
        </form>
        {hipotenusa && (
          <>
            <p className="pt-5">La hipotenusa tiene que ser de:</p>
            <p className="text-[#00ADB5] text-3xl font-bold">{hipotenusa} metros 📐</p>
            
          </>
        )}
      </div>
    </section>
  );
}
