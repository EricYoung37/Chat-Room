import { Stack, Skeleton } from "@chakra-ui/react";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="45px" />
    </Stack>
  );
};

export default ChatLoading;