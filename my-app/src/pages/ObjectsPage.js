import objects from "../data/objects.json";
import ObjectCard from "../components/ObjectCard";

export default function ObjectsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {objects.map((obj) => (
        <ObjectCard
          key={obj.id}
          title={obj.title}
          description={obj.description}
          image={obj.image}
        />
      ))}
    </div>
  );
}
