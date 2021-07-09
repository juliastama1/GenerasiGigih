const getAsyncAwait = async (url) => {
  const respon = await fetch(url);
  const data = await respon.json();

  if (!respon.okay) throw new Error("Bad respons!");
  return data;
};

const handleCreatePlaylist = () => alert("Submit it's klik");
const handleFetchButton = () => {
  getAsyncAwait("https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_960_720.jpg")
    .then((data) => console.log("success:", data))
    .catch((error) => alert(error.message));
};

const createPlaylistForm = document.querySelector("form#create-playlist");
const submitCreatePlaylist = createPlaylistForm.querySelector("button[type=submit]");
const fetchDataButton = document.querySelector("button#fetch-data");

submitCreatePlaylist.addEventListener("click", handleCreatePlaylist);
fetchDataButton.addEventListener("click", handleFetchButton);
