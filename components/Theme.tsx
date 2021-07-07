import {
  Box,
  IconButton,
  useColorMode,
  Flex,
  Spacer,
  ThemeScale,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CloseIcon } from "@chakra-ui/icons";

import { useState } from "react";

const Theme: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  //const { user, logout } = useAuth();
  const [disabled, setDisabled] = useState<boolean>(true);
  return (
    <Flex>
      {1 + 1 == 3 ? (
        false
      ) : (
        <Box textAlign="right" py={4} marginLeft={5}>
          <IconButton
            icon={<CloseIcon />}
            aria-label="theme"
            variant="ghost"
            isDisabled={!disabled}
            onClick={() => {
              setDisabled(false);
            }}
          />
        </Box>
      )}
      <Spacer />
      <Box textAlign="right" py={4} marginRight={5}>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="theme"
        />
      </Box>
    </Flex>
  );
};

export default Theme;
