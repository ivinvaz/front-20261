export default function Tabela({ table }) {
  return (
    <table className="border-collapse border border-gray-300 rounded w-full text-center mb-6">
      <thead className="bg-gray-300">
        <tr>
          <th>{table.title}</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          {table.header.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
