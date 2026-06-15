import globeImg from "../assets/Globe.png";

export default function Header() {
  return (
    <header>
      <img src={globeImg} alt="Globe icon" />
      <h1>my travel journal.</h1>
    </header>
  );
}
