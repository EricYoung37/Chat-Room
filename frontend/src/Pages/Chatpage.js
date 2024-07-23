import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../Components/Navbar/SideDrawer";
import MyChats from "../Components/Navbar/MyChats";
import ChatBox from "../Components/Navbar/ChatBox";

const Chatpage = () => {
  const { user } = ChatState();
  return (
    <div style={{ margin: "2rem 1.5rem 0 1.5rem", width: "100%" }}>
      {user && <SideDrawer />}
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
