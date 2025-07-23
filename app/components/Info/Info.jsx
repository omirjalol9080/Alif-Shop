"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Info() {
  const [expanded, setExpanded] = useState({}); // ← obyekt
  const [info, setInfos] = useState([]);
  const maxLines = 6;

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    axios.get("https://6dde240d7bb14ccf.mokky.dev/info")
      .then((res) => {
        setInfos(res.data);
      })
      .catch((err) => {
        console.log("Xatolik:", err);
      });
  }, []);

  return (
    <section className='info'>
      <div className="container">
        <div className="info_list">
          {info.map((item) => (
            <div key={item.id} className="info_card">
              <h1 className="info_card-title">{item.name}</h1>
              <p
                className="info_card-subtitle"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: expanded[item.id] ? "unset" : maxLines,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.title}
              </p>
              <button
                className="toggleBtn"
                onClick={() => toggleExpand(item.id)}
              >
                {expanded[item.id] ? "Yashirish ▲" : "Barchasini ko'rsatish"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;
