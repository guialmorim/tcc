import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const Toast = (props) => {
	toast({
		title: props.title,
		description: props.description,
		status: props.status,
		duration: 1500,
		isClosable: true,
	});
};
