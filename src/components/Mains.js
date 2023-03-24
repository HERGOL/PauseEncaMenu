import React from "react";

export default function Mains({ type , items }) {
  return (
    <section className="mains">
      <h2 className="mains-heading">{type}</h2>
      {items.map((item, index) => (
        <article className="menu-item" key={index}>
          <div className="mains-name">{item.name}</div>
          <strong className="mains-price">{item.price}</strong>
        </article>
      ))}
    </section>
  );
}
 