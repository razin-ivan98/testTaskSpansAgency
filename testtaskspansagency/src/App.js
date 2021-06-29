import { AppWrapper } from "./App.styled";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

export default App;
