import Header from "./components/Header";
import Entry from "./components/Entry";
import Data from "./data";

const EntriesElements = Data.map((entry) => {
  return <Entry key={entry.id} {...entry} />;
});

export default function App() {
  return (
    <>
      <Header />
      <main className="container">{EntriesElements}</main>
    </>
  );
}
