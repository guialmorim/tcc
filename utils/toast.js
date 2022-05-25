import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const Toast = (props) => {
	console.log(toast);
	toast({
		title: props.title,
		description: props.description,
		status: props.status,
		duration: 5000,
		isClosable: true,
		position: 'top-left',
	});
};
