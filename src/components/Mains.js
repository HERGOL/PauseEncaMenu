import React from "react";
import { IoEyeOutline} from "react-icons/io5";

export default function Mains({ type , items }) {
  const redirectToSite = (url) => {
    window.location.href = url;
  };

  return (
    <section className="mains">
      <h2 className="mains-heading">{type}</h2>
      {items.map((item, index) => (
        <article className="menu-item" key={index}>
          {item.watch && (
          <IoEyeOutline className="extras-icon" size={22}  onClick={() => redirectToSite(item.url)}/>
          )}
          <div className="mains-name">{item.name}</div>
          <strong className="mains-price">{item.price}</strong>
        </article>
      ))}
    </section>
  );
}
 