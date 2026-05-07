export default function Input({ error, onChange, name, placeholder }) {
  return (
    <div className="mt-3 flex flex-col">
      <label htmlFor={name} className="mr-3">
        {placeholder}
      </label>
      <input
        type="password"
        id={name}
        name={name}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded w-80"
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
}
