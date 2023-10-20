type CardProps = {
  subtitle: string;
  title: string;
  bgColour: string;
  subtitleColour: string;
  titleColour: string;
};

export default function Card ({ subtitle, title, bgColour, subtitleColour, titleColour }: CardProps) {
  return (
    <div className={`h-full ${bgColour} px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center`}>
      <h2 className={`tracking-widest text-md title-font font-medium ${subtitleColour} mb-1`}>
        { subtitle }
      </h2>

      <h2 className={`title-font text-3xl font-semibold ${titleColour} mb-3`}>
        { title }
      </h2>
    </div>
  );
};