import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import NavBar from "../Components/Panels/NavBar";
import MyChats from "../Components/Panels/MyChats";
import ChatBox from "../Components/Panels/ChatBox";
import { useState } from "react";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  // whenever fetchAgain changes, fetch chats again

  return (
    <div style={{ margin: "2rem 1.5rem 0 1.5rem", width: "100%" }}>
      {user && <NavBar />}
      <Box
        display="flex"
        // d="flex" won't wrap the box across the screen!
        h="90%"
        justifyContent="space-between"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
