import Header from "./components/Header";
import Entry from "./components/Entry";
import Data from "./data";

const EntriesElements = Data.map((entry) => {
  return (
    <Entry
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  );
});

export default function App() {
  return (
    <>
      <Header />
      <main className="container">{EntriesElements}</main>
    </>
  );
}
