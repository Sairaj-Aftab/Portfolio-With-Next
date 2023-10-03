import axios from "axios";

async function getData() {
  const res = await axios.get(
    `http://localhost:3000/api/info/6505c59b57abad62542b7f29`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.data.info;
}

export default getData;
