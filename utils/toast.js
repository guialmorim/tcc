import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const Toast = ({ isClosable = true, duration = 1500, ...rest }) => {
	toast({
		isClosable,
		duration,
		...rest,
	});
};
