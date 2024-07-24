import { Box, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider";
import { getSender, getSenderFull } from "../../config/ChatLogics";
import ProfileModal from "../Accessories/ProfileModal";
import UpdateGroupChatModal from "../Accessories/UpdateGroupChatModal";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState();

  return (
    <>
      {selectedChat ? (
        <>
          <Box
            fontSize={{ base: "1rem", md: "1.5rem" }}
            pb={3}
            px={2}
            w="100%"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
            fontFamily="Work Sans"
          >
            <IconButton
              d={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
            {!selectedChat.isGroupChat ? (
              <>
                {getSender(user, selectedChat.users)}
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              </>
            ) : (
              <>
                {selectedChat.chatName.toUpperCase()}
                <UpdateGroupChatModal
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                />
              </>
            )}
          </Box>
          <Box
            d="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            borderColor="#dcf1ff"
            borderWidth="thick"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
          >
            {/* Message Here */}
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="2xl" pb={3} fontFamily="Edu AU VIC WA NT Hand">
            Click on a Chat to Start
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
