import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/button';
import { useColorMode, Flex } from '@chakra-ui/react';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const dark = colorMode === 'dark';
    return (
        <header>
            <Flex align='center' p={5}>
                <IconButton ml='auto' px={5} py={2} icon={dark ? <FaRegLightbulb /> : <FaLightbulb color='#292929' />} onClick={toggleColorMode} isRound="true">
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </IconButton>
            </Flex>
        </header>
    )
}

export default Header;