import React from "react";

function Searchblock() {
  return (
    <div className="Searchblock">
      <div className="center">
        <form action="">
          <button type="submit">
            <img src="/icons/search.svg" alt="" />
          </button>
          <input type="search" placeholder="Where to?" />
        </form>
      </div>
    </div>
  );
}

export default Searchblock;
