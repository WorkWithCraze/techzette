// import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import SinglePost from "./components/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <TopBar/>
      {/* <Home /> */}
      {/* <Single />*/}
      <Write />

      {/* <SinglePost />*/}
      {/* <Sidebar />  */}
      <Footer />
    </div>
  );
}

export default App;