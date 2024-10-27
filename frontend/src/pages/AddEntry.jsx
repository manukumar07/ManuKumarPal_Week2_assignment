import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JournalContext } from "../context/JournalContext";
import { v4 as uuidv4 } from "uuid";

const AddEntry = () => {
  const { addEntry } = useContext(JournalContext);
  const navigate = useNavigate();

  const [entryData, setEntryData] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: uuidv4(),
      ...entryData,
    };

    addEntry(newEntry);
    navigate("/my-journal");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-[#F7F7FF] shadow-md rounded-md mt-6"
    >
      <h2 className="text-2xl font-extrabold mb-4 text-center text-[#3C3C3C]">
        Add a New Journal Entry
      </h2>

      <div className="mb-4" style={{ margin: "10px 0" }}>
        <label
          htmlFor="title"
          className="block text-sm  text-[#3C3C3C] font-bold"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={entryData.title}
          onChange={handleInputChange}
          placeholder="Enter the title of your entry"
          className="mt-1 block w-full p-2 border border-[#2D5F5D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F78154] "
          required
        />
      </div>

      <div className="mb-4" style={{ margin: "10px 0" }}>
        <label
          htmlFor="location"
          className="block text-sm  text-[#3C3C3C] font-bold"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={entryData.location}
          onChange={handleInputChange}
          placeholder="Enter your location"
          className="mt-1 block w-full p-2 border border-[#2D5F5D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F78154]"
          required
        />
      </div>

      <div className="mb-4" style={{ margin: "10px 0" }}>
        <label
          htmlFor="date"
          className="block text-sm font-bold text-[#3C3C3C] "
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={entryData.date}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-[#2D5F5D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F78154]"
          required
        />
      </div>

      <div className="mb-4" style={{ margin: "10px 0" }}>
        <label
          htmlFor="description"
          className="block text-sm font-bold text-[#3C3C3C]"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={entryData.description}
          onChange={handleInputChange}
          placeholder="Write your thoughts here..."
          className="mt-1 block w-full p-2 border border-[#2D5F5D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F78154]"
          rows="4"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#2D5F5D] text-white p-2 rounded-md transition duration-200 hover:bg-[#F78154]"
        style={{ margin: "10px 0" }}
      >
        Add Entry
      </button>
    </form>
  );
};

export default AddEntry;
