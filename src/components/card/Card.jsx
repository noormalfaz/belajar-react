import StyleFont from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${StyleFont.font} border border-solid border-slate-600 rounded-3xl inline-block pb-5 text-center`}>
      <img
        src={props.img}
        alt="Foto Kucing" className="w-80 h-72 rounded-xl"
      />
      <h1 className="text-3xl font-semibold mt-2.5">{props.name}</h1>
      <span className="text-lg">{props.kebiasaan}</span>
    </div>
  );
}
export default Card;
