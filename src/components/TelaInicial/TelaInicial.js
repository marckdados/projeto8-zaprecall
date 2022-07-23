import "./style.css";
export default function TelaInicial({ setTela, logo }) {
  return (
    <>
      <img className="logo-inicio" src={logo} alt="" />
      <h1 className="titulo-inicio">ZapRecall</h1>
    </>
  );
}
