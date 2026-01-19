import apiFunction from "@/lib/apiFunction";
import apiUrl from "@/lib/apiUrl";
import showToast from "@/lib/showToast";

const { create } = require("zustand");

const useAuth = create((set, get) => ({
  userObject: {
    name: "",
    email: "",
    password: "",
  },
  setUserObject: function (name, value) {
    set((state) => ({ userObject: { ...state.userObject, [name]: value } }));
  },

  resetObject: function () {
    set({ userObject: { name: "", email: "", password: "" } });
  },

  register: async function () {
    const { userObject } = get();
    const data = await apiFunction({
      url: apiUrl.register,
      payload: userObject,
      type: "post",
    });
    if (data.status) {
      resetObject();
    }
  },
  login: async function () {
    const { userObject } = get();
    const data = await apiFunction({
      url: apiUrl.login,
      payload: userObject,
      type: "post",
    });
  },
}));

export default useAuth;
