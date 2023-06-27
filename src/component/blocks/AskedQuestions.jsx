import React, { useState } from "react";

function AskedQuestions() {
  function DropDowns({ title }) {
    const [IsClicked, setIsClicked] = useState(false);
    return (
      <li>
        <button
          onClick={() => {
            setIsClicked(!IsClicked);
          }}
        >
          <span>{title}</span>
          <img src={IsClicked ? "/icons/up.svg" : "/icons/down.svg"} alt="" />
        </button>
        {IsClicked && (
          <div className="expandable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed
            earum dignissimos mollitia beatae possimus inventore est aperiam
            aliquam eius. Explicabo cum voluptates, expedita fugit repellendus
            rerum illum nostrum, natus quas veniam optio! Maiores tenetur
            accusantium incidunt expedita aspernatur! Reiciendis?
          </div>
        )}
      </li>
    );
  }
  return (
    <div className="AskedQuestions">
      <div className="center">
        <h3>Frequently asked questions about Region</h3>

        <ul>
          <DropDowns
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, nulla?"
            }
          />
          <DropDowns
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, nulla?"
            }
          />
          <DropDowns
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, nulla?"
            }
          />
          <DropDowns
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, nulla?"
            }
          />
          <DropDowns
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, nulla?"
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default AskedQuestions;
