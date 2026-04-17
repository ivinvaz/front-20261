function Tabela({ titulos, dados }) {
  return (
    <table>
      <thead>
        <tr>
          {titulos.map((item, index) => (
            <td key={index}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {dados.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((valor, index) => (
                <td key={index}>{valor}</td>
              ))}
            </tr>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Tabela;
