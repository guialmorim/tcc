import tw from 'tailwind-styled-components';

function InputButton() {
	return <InputButtonWrapper placeholder="Where to go?" />;
}

const InputButtonWrapper = tw.input`
     h-20
     bg-gray-200
     text-2xl
     p-4
     mt-8
     rounded-xl
     w-full
     outline-none
     border-none
`;

export default InputButton;
