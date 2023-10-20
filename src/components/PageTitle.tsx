export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 text-center">
      { title }
    </h1>
  );
};
