type ButtonProps = {
  label: string;
  classes?: string;
};

const BASE_CLASS_NAME = 'border rounded-lg';

export default function Button ({ label, classes }: ButtonProps) {
  const className = classes ? `${BASE_CLASS_NAME} ${classes}` : `${BASE_CLASS_NAME} px-4 py-2`;
  return (
    <button className={ className }>
      { label }
    </button>
  );
};