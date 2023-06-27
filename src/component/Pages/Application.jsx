import React, { useState, useRef, useEffect } from "react";
import db from "../Data/Firebase";
import {
  onSnapshot,
  collection,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { Outlet } from "react-router-dom";
import Select from "react-select";

function Application({ data }) {
  const Name = useRef();
  const LastName = useRef();
  const Region = useRef();
  const Title = useRef();
  const Discription = useRef();
  const Type = useRef();
  const Phone = useRef();
  const Email = useRef();
  const [loading, setloading] = useState(false);
  const regionsArr = data.regions;
  function SubmitHandler(event) {
    event.preventDefault();
    setloading(true);
    const data = {
      name: Name.current.value,
      lastname: LastName.current.value,
      regionID: Region.current.value,
      title: Title.current.value,
      discription: Discription.current.value,
      type: Type.current.value,
      phone: Phone.current.value,
      email: Email.current.value,
    };
    const collectionRef = collection(db, "GurmaniusEmailReq");
    const q = query(collectionRef, where("email", "==", data.email));
    onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        const payload = data;
        addDoc(collectionRef, payload)
          .then(() => {
            Name.current.value = "";
            LastName.current.value = "";
            Region.current.value = "";
            Title.current.value = "";
            Discription.current.value = "";
            Type.current.value = "";
            Phone.current.value = "";
            Email.current.value = "";
          })
          .catch((error) => {
            console.log(error.message);
          });
        alert("Submitted");
      } else {
        alert("Already Submitted");
      }
    });

    setloading(false);
  }

  return (
    <div className="Application">
      <div className="center">
        <h1>Application</h1>
        <form onSubmit={SubmitHandler}>
          <div className="group">
            <input
              type="text"
              placeholder="name"
              ref={Name}
              required
              className="Name"
            />
            <input
              type="text"
              placeholder="last name"
              ref={LastName}
              required
              className="LName"
            />
          </div>
          <select name="region" ref={Region}>
            {regionsArr?.map((region) => {
              return (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              );
            })}
          </select>
          {/* <Select
            options={AttributeOptions}
            onChange={AttChangeHandler}
            isMulti
            required
          /> */}
          <input type="text" placeholder="title" ref={Title} required />
          <input
            type="text"
            placeholder="discription"
            ref={Discription}
            required
          />
          <input type="text" placeholder="type" ref={Type} required />
          <input type="text" placeholder="phone" ref={Phone} required />
          <input type="email" placeholder="email" ref={Email} required />
          <button type="submit" disabled={loading}>
            submit
          </button>
        </form>
      </div>
      <Outlet />
    </div>
  );
}

export default Application;
