function Card(props) {
  return (
    <article className="border border-solid rounded-xl border-gray-200 m-5 flex flex-1 flex-col min-w-fit">
      <h3 className="bg-gray-200 p-4 pt-2 pb-2 rounded-t-lg font-bold">{props.titulo}</h3>
      <ul className="p-4">
        {props.items.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default Card;
