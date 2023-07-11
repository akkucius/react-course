const Concepts = (props) => {
  return (
    <ul id="concepts">
      <li className="concept">
        <img src={props.items.items[0].image} alt={props.items.items[0].title} />
        <h2>{props.items.items[0].title}</h2>
        <p>{props.items.items[0].description}</p>
      </li>
      <li className="concept">
        <img src={props.items.items[2].image} alt={props.items.items[1].title} />
        <h2>{props.items.items[1].title}</h2>
        <p>{props.items.items[1].description}</p>
      </li>
      <li className="concept">
        <img src={props.items.items[2].image} alt={props.items.items[2].title} />
        <h2>{props.items.items[2].title}</h2>
        <p>{props.items.items[2].description}</p>
      </li>
    </ul>
  );
};

export default Concepts;
