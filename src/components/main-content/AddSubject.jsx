import axios from "axios";
import { useState } from "react";

const AddSubject = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    imageURL: "",
    videosCount: 0,
    articlesCount: 0,
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    await axios
      .post(
        "https://learning-app-15eb1-default-rtdb.asia-southeast1.firebasedatabase.app/subject.json",
        data
      )
      .then((res) => console.log(JSON.stringify(res)))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="image"
        onChange={(e) => setData({ ...data, imageURL: e.target.value })}
      />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="video"
        onChange={(e) => setData({ ...data, videosCount: e.target.value })}
      />
      <input
        type="number"
        placeholder="articles"
        onChange={(e) => setData({ ...data, articlesCount: e.target.value })}
      />
      <button type="submit">Click</button>
    </form>
  );
};
export default AddSubject;
