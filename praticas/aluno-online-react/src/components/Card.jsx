export default function Card({ title, contentList }) {
  return (
    <article className="rounded border border-gray-300 mb-3">
      <h3 className="font-bold bg-gray-300 text-center">{title}</h3>
      <ul className="p-2">
        {contentList.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </article>
  );
}
