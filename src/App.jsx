import React, { useState } from "react";
import img from "./assets/img/debate.png";

function Home() {
  const [debates, setDebates] = useState([
    { title: "Social Media's Influence on Mental Health", description: "Discuss the pros and cons of social media and its effects on mental well-being." },
    { title: "The Future of Electric Cars", description: "Explore the role of electric cars in combating climate change and their future impact on the auto industry." },
    { title: "Universal Basic Income (UBI)", description: "Should governments provide a guaranteed income to all citizens to reduce poverty?" },
    { title: "Cryptocurrency: The Future of Finance?", description: "Examine the rise of cryptocurrencies and their potential to replace traditional currencies." },
    { title: "Mandatory Vaccination for Public Health", description: "Debate the necessity and ethics of making vaccines mandatory to combat disease outbreaks." },
    { title: "Should College Education Be Free?", description: "Discuss whether higher education should be free for all or if students should pay for it." },
    { title: "Work From Home: The New Normal?", description: "Analyze the benefits and challenges of remote work in a post-pandemic world." },
    { title: "Legalizing Marijuana", description: "The pros and cons of legalizing marijuana for recreational and medicinal use." },
    { title: "Climate Change: Are We Doing Enough?", description: "Evaluate the global efforts to combat climate change and its urgency." },
    { title: "Should Voting Be Mandatory?", description: "Discuss whether compulsory voting should be introduced to increase democratic participation." },
    { title: "Banning Plastic: A Solution to Pollution?", description: "Explore the impact of banning plastic and its potential to reduce pollution and protect wildlife." },
    { title: "The Ethics of Animal Testing", description: "Debate whether animal testing for scientific and cosmetic purposes is justified." },
    { title: "Privacy vs. National Security", description: "Where should the line be drawn between personal privacy and ensuring national security?" },
    { title: "Online Learning vs. Traditional Classrooms", description: "Compare the effectiveness of online learning with traditional classroom education." },
    { title: "The Role of Governments in Controlling Social Media", description: "Should governments regulate social media platforms to prevent the spread of misinformation?" },
    { title: "Nuclear Energy: Solution or Threat?", description: "Debate whether nuclear energy is a viable solution to energy needs or a dangerous threat." },
    { title: "The Death Penalty: Should It Be Abolished?", description: "Examine the arguments for and against the use of the death penalty in criminal justice systems." },
    { title: "Universal Healthcare: A Right or a Privilege?", description: "Should healthcare be considered a basic right for all citizens, or a service to be paid for?" },
    { title: "Genetic Engineering: Playing God?", description: "Discuss the ethical implications of genetic engineering in humans, animals, and agriculture." },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredDebates = debates.filter((debate) =>
    debate.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div
        className={`fixed top-0 left-0 h-full bg-blue-900 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 p-4 z-20`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Menu</h1>
          <button
            className="text-white focus:outline-none text-2xl"
            onClick={toggleSidebar}
          >
            ×
          </button>
        </div>
        <ul className="space-y-4">
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Explore Topics</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Help</li>
        </ul>
      </div>

      <div className="flex-grow flex flex-col min-h-screen">
        <header className="w-full fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between px-8 py-4 z-10">
          <button
            className="text-2xl font-bold p-1 text-white bg-blue-400 rounded-md"
            onClick={toggleSidebar}
          >
            ☰
          </button>

          <div className="flex items-center space-x-4">
            <span className="hover:underline cursor-pointer">Logout</span>
            <img
              className="w-10 h-10 rounded-full"
              src={img}
              alt="Profile"
            />
          </div>
        </header>
        <div className="flex-grow flex items-center justify-center mt-24 p-4">
          <div className="w-full max-w-2xl mx-auto">
            <main className="border-2 border-gray-300 rounded-lg p-6 bg-white shadow-lg">
              <div className="mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search debate title..."
                  className="border px-4 py-2 w-full rounded"
                />
              </div>
              {filteredDebates.length > 0 ? (
                filteredDebates.map((debate, index) => (
                  <div
                    key={index}
                    className="mb-6 p-4 border rounded bg-gray-50 shadow-md"
                  >
                    <h2 className="font-bold text-lg">{debate.title}</h2>
                    <p className="text-gray-700">{debate.description}</p>
                    <button className="mt-2 bg-sky-300 text-white px-4 py-2 rounded">
                      Explore
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No debates found</p>
              )}
            </main>
          </div>
        </div>
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-blue-500 text-white rounded-full text-2xl flex items-center justify-center">
          +
        </button>
      </div>
    </div>
  );
}

export default Home;
