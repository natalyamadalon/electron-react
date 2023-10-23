import { Flex, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IProps {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ setLogged }: IProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
      <Flex
        border={"1px solid black"}
        width={"60rem"}
        height={"40rem"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <label>Token Bot:</label>
        <Input
          id="token-bot"
          width={"80%"}
          height={"1rem"}
          padding={"0.5rem"}
        />

        <label>Chat Id:</label>
        <Input id="chat-id" width={"80%"} height={"1rem"} padding={"0.5rem"} />
      </Flex>
    </>
  );
};

export default Home;
