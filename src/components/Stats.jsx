import { FACEBOOK_MAX, INSTAGRAM_MAX } from "./Constants";

export default function Stats({ numberOfCharacters, numberOfWords }) {
  return (
    <section className="stats">
      <Section number={numberOfWords} title="Words" />
      <Section number={numberOfCharacters} title="Characters" />
      <Section number={INSTAGRAM_MAX- numberOfCharacters} title="Instagram" />
      <Section number={FACEBOOK_MAX - numberOfCharacters} title="Facebook" />
    </section>
  );
}

function Section({ number, title }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{title}</h2>
    </section>
  );
}
