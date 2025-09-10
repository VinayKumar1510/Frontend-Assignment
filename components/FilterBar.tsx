interface FilterBarProps {
  value: string;
  onChange: (val: string) => void;
}

const issues = ["fever", "cold", "headache", "diabetes", "hypertension"]; // Add common issues or generate dynamically

export default function FilterBar({ value, onChange }: FilterBarProps) {
  return (
    <select
      className="border border-gray-300 rounded-lg p-2 bg-white text-gray-700"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Medical Issues</option>
      {issues.map((issue) => (
        <option key={issue} value={issue}>
          {issue}
        </option>
      ))}
    </select>
  );
}
