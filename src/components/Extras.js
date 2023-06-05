import React from "react";
import { IoEyeOutline} from "react-icons/io5";

export default function Extras({ type, items }) {
  const redirectToSite = (url) => {
    window.location.href = url;
  };
  return (
    <section className="extras">
      <h2 className="extras-heading">{type}</h2>
      {items.map((item, index) => (
        <article className="menu-item" key={index}>
          {item.watch && (
          <IoEyeOutline className="extras-icon" size={22}  onClick={() => redirectToSite(item.url)}/>
          )}
          <div className="extras-name">{item.name}</div>
          <strong className="extras-price">{item.price}</strong>
        </article>
      ))}
    </section>
  );
} 
