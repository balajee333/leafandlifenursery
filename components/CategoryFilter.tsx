"use client";

interface CategoryFilterProps {
  categories: { value: string; label: string }[];
  selected: string | null;
  onSelect: (value: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          selected === null
            ? "bg-brand-green text-white shadow-md"
            : "bg-white text-brand-green border border-brand-green/20 hover:border-brand-green/50"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onSelect(cat.value)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            selected === cat.value
              ? "bg-brand-green text-white shadow-md"
              : "bg-white text-brand-green border border-brand-green/20 hover:border-brand-green/50"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
