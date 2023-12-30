type TextInputProps = {
  placeholder?: string;
};

export default function TextInput ({ placeholder }: TextInputProps) {
  return <input
    type="text"
    placeholder={ placeholder || '' }
    className="border rounded-lg p-4"
  />
};
