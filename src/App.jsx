import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
