type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="mx-auto">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 text-center">
        { title }
      </h1>
      {subtitle &&
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
          Some supporting text here...
        </p>
      }
    </div>
  );
};
