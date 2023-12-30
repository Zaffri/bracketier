import FormLayout from '@/components/layouts/Form';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';

export default async function PlayerCreatePage() {
  return (
    <FormLayout title='Add Player'>
      <TextInput placeholder='Name' />
      <Button label='Add' classes='bg-blue-500 text-white p-3' />
    </FormLayout>
  );
};
