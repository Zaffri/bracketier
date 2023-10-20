export default function PageSubtitle({ subtitle }: { subtitle: string }) {
  return (
    <h3 className="text-lg font-medium title-font mb-2 text-gray-900">
      { subtitle }
    </h3>
  );
};
