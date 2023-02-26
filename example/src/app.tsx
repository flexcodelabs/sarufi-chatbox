import SarufiChatbox from "../../src/index";

const App = () => {
  return (
    <div>
      Hello World, welcome to my application / Website
      <SarufiChatbox
        botId={16}
        theme={{
          buttonSize: "md",
          primaryColor: "blue",
          borderColor: "lightgray",
          fontSize: "14",
          fontFamily: "PoppinsRegular",
          sentBoxBg: "blue",
          receivedBoxBg: "white",
          sentBoxColor: "white",
          receivedBoxColor: "black",
          chatboxBg: "#EDECE1",
          receivedBoxLinkColor: "blue",
          sentBoxLinkColor: "white",
        }}
      />
    </div>
  );
};

export default App;
