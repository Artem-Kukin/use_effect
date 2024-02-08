import { useEffect, useState } from "react";

const Details = ({ id, url }) => {
  const [user, setUser] = useState();
  const [abortController, setAbortController] = useState(null);

  useEffect(() => {
    if (id) {
      if (abortController) {
        abortController.abort();
      }
      const _abortController = new AbortController();
      setAbortController(_abortController);

      fetch(`${url}${id}.json`, { signal: _abortController.signal })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUser(data);
        });
    }
  }, [id]);

  if (user === undefined) {
    return;
  } else {
    return (
      <div className="user-info">
        <img className="user-info_foto" src={user.avatar} alt="user foto" />
        <div className="user-info_details">Name: {user.name}</div>
        <div className="user-info_details">City: {user.details.city}</div>
        <div className="user-info_details">Company: {user.details.company}</div>
        <div className="user-info_details">
          Position: {user.details.position}
        </div>
      </div>
    );
  }
};

export default Details;
