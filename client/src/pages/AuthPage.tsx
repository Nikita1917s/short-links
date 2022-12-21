import React, { FC, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useHttp from "../hooks/http.hooks";
import { useMessage } from "../hooks/message.hook";

const AuthPage: FC = () => {
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    message(error);
    clearError();
  }, [clearError, error, message]);

  useEffect(() => {
    window?.M?.updateTextFields();
  }, []);

  const registerHandler = async () => {
    try {
      const data = await request(`/api/auth/register`, "POST", { ...form });
      message(data.message);
    } catch (error) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request(`/api/auth/login`, "POST", { ...form });
      message(data.message);
      auth.login(data.token, data.userId);
    } catch (error) {}
  };
  return (
    <div className="row" data-testid="auth-page">
      <div className="col s6 offset-s3">
        <h1>Short links</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorisation</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Enter email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="enter password"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Пароль</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10 }}
              disabled={loading}
              onClick={loginHandler}
            >
              Enter
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage