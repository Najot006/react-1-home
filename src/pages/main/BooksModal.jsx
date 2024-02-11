import React, { useEffect, useState } from "react";
import axiosClient from "../../plugins/axiosClient";

export default function BookModal({ open, toggle }) {
  const [file, setFile] = useState("");
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosClient.get("/author").then((response) => {
      setAuthors(response?.data);
    });
    axiosClient.get("/category/get/all").then((response) => {
      setCategories(response?.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name: e.target[0].value,
      author_id: +e.target[1].value,
      price: +e.target[2].value,
      code: e.target[3].value,
      janr_id: +e.target[4].value,
      description: e.target[6].value,
    };
    const formData = new FormData();
    formData.append("file", file);
    axiosClient.post("/files/upload", formData).then((response) => {
      if (response.status === 201) {
        axiosClient
          .post("/book/create", { ...payload, image: response.data.link })
          .then((response) => {
            console.log(response);
          });
      }
    });
  };
  return (
    <div>
    </div>
  );
}
