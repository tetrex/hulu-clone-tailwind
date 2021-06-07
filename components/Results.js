import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

export default function Results({ results }) {
  return (
    <FlipMove className="flex-wrap justify-center px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {results.map((results) => (
        <Thumbnail key={results.id} result={results} />
      ))}
    </FlipMove>
  );
}
