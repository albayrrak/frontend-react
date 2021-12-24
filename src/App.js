import "./style.scss";
//import getApis from "./apis.json";
import Search from "./components/search/Search";
import ApiItem from "./components/ApiItem/ApiItem";
import Alert from "./components/Alert/Alert"

import { useEffect, useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [apis, setApis] = useState([]);

  const bookmarkItems = [1, 2]

  useEffect(() => {
    fetch('https://617003a523781c00172897af.mockapi.io/api/v1/data')
      .then(res => res.json())
      .then(data => setApis(data.map(api => {
        if (bookmarkItems.includes(api.id)) {
          api.bookmark = true
        }
        return api;
      })))
  }, [])

  const bookmarks = apis.filter((api) => api.bookmark === true)
  const filteredApis = apis.filter((api) => api.category.toLowerCase().includes(search.toLowerCase()))

  const toogleBookmark = (id) => {
    setApis(apis.map(api => {
      if (api.id === id) {
        api.bookmark = !api.bookmark
      }
      return api
    }))
  }
  return (
    <div className='App'>
      <h3>
        Lorem ipsum dolor sit amet, consectetur <br />
        tristique efficitur sem ut.
      </h3>
      <Search
        search={search}
        setSearch={setSearch}
        placeholder='Bir şeyler ara...'
      />
      <div className='container'>
        <h4>Featured APIs of this week</h4>
        <div className='api-list'>
          {filteredApis
            .map((api) => (
              <ApiItem toogleBookmark={toogleBookmark} key={api.id} api={api} />
            ))}
          {filteredApis.length === 0 && <Alert message="API NOT FOUND" />}
        </div>
      </div>
      <div className='container'>
        <h4>Your Bookmarks</h4>
        <div className='api-list'>
          {bookmarks.map((api) => (
            <ApiItem toogleBookmark={toogleBookmark} key={api.id} api={api} />
          ))}
          {bookmarks.length === 0 && (
            <Alert message="Ther is not item on your bookmarks" />
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
