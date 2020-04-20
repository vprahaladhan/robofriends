import axios from "axios";

// const getRobots = async () => {
//   const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
//   return data
// }

export const setSearchText = searchText => ({
  type: "CHANGE_SEARCH_TEXT",
  data: searchText
});

export const fetchRobots = () =>
 async (dispatch) => {
  dispatch({
    type: "FETCH_REMOTE_ROBOTS",
    data: (await axios.get("https://jsonplaceholder.typicode.com/users")).data
  })
 };
