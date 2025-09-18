import subjects from "../data/subjects.json";
import SubjectCard from "../components/SubjectCard";

export default function SubjectsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {subjects.map((sub) => (
        <SubjectCard
          key={sub.id}
          subject={sub.subject}
          description={sub.description}
          image={sub.image}
        />
      ))}
    </div>
  );
}
