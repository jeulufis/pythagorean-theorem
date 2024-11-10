export default function NotaPitagoras() {
  return (
    <section className="px-5 flex items-center justify-center flex-col h-full md:h-screen py-10 w-full">
      <div className="space-y-2">
        <h1 className="text-5xl rampart-one-regular text-[#000000]">Notas Pitagoras</h1>
      </div>
      <ul className="font-light  w-full md:w-2/5 pt-10 text-justify space-y-6">
        <li>
        El Teorema de Pitágoras se atribuye a Pitágoras de Samos, un filósofo y matemático griego que vivió aproximadamente entre el 570 y el 495 a.C. Pitágoras es una figura rodeada de misterio y misticismo, ya que no dejó escritos propios, y todo lo que sabemos de él proviene de los relatos de sus seguidores y filósofos posteriores. Sin embargo, su escuela pitagórica, fundada en el sur de Italia, fue la cuna de este y otros importantes desarrollos en matemáticas y filosofía.
        </li>
        <li>
        Aunque el teorema lleva su nombre, existen pruebas de que ya era conocido en otras culturas antiguas antes de que Pitágoras lo enseñara. Las civilizaciones babilónica y egipcia, por ejemplo, tenían conocimientos sobre la relación entre los lados de un triángulo rectángulo, aunque no lo expresaban de la misma manera que lo hacemos hoy.
        </li>
       <li>
       Aunque hay muchas formas de demostrar este teorema (existen cientos de pruebas diferentes), la más conocida en la época de Pitágoras probablemente involucraba la construcción geométrica, basada en el área de cuadrados construidos sobre los lados de un triángulo. Así, al sumar las áreas de los cuadrados de los catetos, se obtenía el área equivalente al cuadrado sobre la hipotenusa.
       </li>
      </ul>
    </section>
  );
}
