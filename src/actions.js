import axios from "axios";

const getRobots = async () => {
  const robots = await axios.get("https://jsonplaceholder.typicode.com/users")
  return robots.data
}

export const setSearchText = searchText => ({
  type: "CHANGE_SEARCH_TEXT",
  data: searchText
});

export const fetchRobots = async () => ({
  type: "FETCH_REMOTE_ROBOTS",
  data: await getRobots() 
});
