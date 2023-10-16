import React from "react";

export default function Card({ character }) {
  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        width={200}
        loading="lazy"
      />
      <p>
        ID : {character.id} | {character.name}
      </p>
    </div>
  );
}
