import PageTitle from "@/components/PageTitle";

type FormLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function FormLayout ({ title, children }: FormLayoutProps) {
  return (
    <>
      <PageTitle title={title} />
      <div className='flex flex-col gap-4 pt-4 max-w-md m-auto'>
        { children }
      </div>
    </>
  );
};