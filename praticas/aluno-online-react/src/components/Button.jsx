export default function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-gray-400 text-white font-bold py-2 px-4 rounded w-full mt-6 cursor-pointer"
    >
      {children}
    </button>
  );
}
