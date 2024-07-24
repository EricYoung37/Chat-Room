import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import NavBar from "../Components/Panels/NavBar";
import MyChats from "../Components/Panels/MyChats";
import ChatBox from "../Components/Panels/ChatBox";

const Chatpage = () => {
  const { user } = ChatState();
  return (
    <div style={{ margin: "2rem 1.5rem 0 1.5rem", width: "100%" }}>
      {user && <NavBar />}
      <Box
        display="flex"
        // d="flex" won't wrap the box across the screen!
        justifyContent="space-between"
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default Chatpage;
