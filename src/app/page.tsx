import Card from "@/components/Card";
import PageSubtitle from "@/components/PageSubtitle";
import PageTitle from "@/components/PageTitle";

export default function Dashboard() {
  return (
    <>
      <PageTitle title="Dashboard" />

      <div className="mt-7">
        <PageSubtitle subtitle="General stats" />

        <div className="grid grid-cols-3 gap-4 pb-5">
          <Card bgColour="bg-sky-500" subtitleColour="text-sky-200" titleColour="text-sky-800" subtitle="Total tournaments played" title="8" />
          <Card bgColour="bg-sky-500" subtitleColour="text-sky-200" titleColour="text-sky-800" subtitle="Total matches played" title="100" />
          <Card bgColour="bg-sky-500" subtitleColour="text-sky-200" titleColour="text-sky-800" subtitle="Total players" title="11" />
        </div>

        <PageSubtitle subtitle="Player stats" />

        <div className="grid grid-cols-3 gap-4">
          <Card bgColour="bg-violet-500" subtitleColour="text-violet-300" titleColour="text-violet-800" subtitle="Most tournament wins" title="Andy" />
          <Card bgColour="bg-violet-500" subtitleColour="text-violet-300" titleColour="text-violet-800" subtitle="Most match wins" title="Steven" />
          <Card bgColour="bg-violet-500" subtitleColour="text-violet-300" titleColour="text-violet-800" subtitle="Largest winning streak" title="15 (Lyn)" />
        </div>
      </div>
    </>
  );
};