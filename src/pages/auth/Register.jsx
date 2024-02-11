import React, { useState } from "react";
import useAuthStore from "../../store/auth";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../plugins/axiosClient";

export default function Register() {
  const { register } = useAuthStore();
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const save = (e) => {
    e.preventDefault();
    axiosClient
      .post("/auth/signup", {
        full_name: fullname,
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res?.data?.tokens?.access_token) {
          localStorage.setItem("token", res?.data?.tokens?.access_token);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mt-20">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mx-[700px] mt-60">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Register
          </h1>
          <form onSubmit={save} className="space-y-4 md:space-y-6">
            <div className="flex-col">
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setFullname(e.target.value)}
                placeholder="full_name"
                className="p-[10px] rounded-xl w-[380px]"
              />
            </div>

            <div>
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                className="p-[10px] rounded-xl w-[380px]"
              />
            </div>

            <div>
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="p-[10px] rounded-xl w-[380px]"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-white text-black bg-white-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-white-700 dark:focus:ring-primary-800"
            >
              save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
