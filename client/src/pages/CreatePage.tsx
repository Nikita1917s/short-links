import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useHttp from "../hooks/http.hooks";

export const CreatePage: FC = () =>{
  const auth = useContext(AuthContext);
  const history = useNavigate();
  const {request} = useHttp();
  const [link, setLink] = useState("");

  const pressHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link}, {
          Authorization: `Bearer ${auth.token}`
        })

       history(`/detail/${data.link._id}`);

      } catch (e) {}
    }
  };

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            placeholder="Enter a link"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">Enter link to make is short and press Enter</label>
        </div>
      </div>
    </div>
  );
};
