export default function SubjectCard({ subject, description, image }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <img src={image} alt={subject} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{subject}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
