import { collection, onSnapshot, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "./Firebase";

function GetDataBase() {
  const [Attributes, setAttributes] = useState([]);
  const [Regions, setRegions] = useState([]);
  useEffect(() => {
    GetDocsFromColl("Attributes", setAttributes);
    GetDocsFromColl("regions", setRegions);
  }, []);
  async function GetDocsFromColl(collectionName, ushRef) {
    const collectionRef = collection(db, collectionName);
    const DataDoc = await getDocs(collectionRef);
    const filteredDocs = DataDoc.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    ushRef(filteredDocs);
  }
  console.log({ Attributes: Attributes, regions: Regions });
  return { Attributes: Attributes, regions: Regions };
}

export default GetDataBase;
