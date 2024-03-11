import { createContext, useState, useCallback } from "react";
import PropTypes from 'prop-types';

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
  signUp: () => {},
  updateUser: () => {},
  deleteUser: () => {},
});

let backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";


export const UserContextProvider = (props) => {
  const [userData, setUserDataState] = useState(null);

  const setUserData = useCallback((data) => {
    setUserDataState(data);
  }, []);


  //CREATE A USER
  const signUpHandler = async (data) => {
    try {
      const res = await fetch(`${backendUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message || "Unable to create User!...");
      }
      return true;
    } catch (error) {
      console.error(error.message);
    }
  };


  //UPDATE A USER
  const updateUserHandler = async (data, userID, token) => {
    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("address", data.address);
      if (data.profilePicture instanceof File) {
        formData.append("picture", data.profilePicture);
      }

      const res = await fetch(`${backendUrl}/User/updateUser/${userID}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message || "Unable to update, try again.");
      }
      const resData = await res.json();
      setUserData(resData.data);
      localStorage.setItem("userData", JSON.stringify(resData.data));
    } catch (error) {
      console.error(error.message);
    }
  };


//DELETE A USER
  const deleteUserHandler = async (userID, token) => {
    try {
      const res = await fetch(`${backendUrl}/User/remove/${userID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message || "Unable to delete, try again.");
      }
      setUserData(null); // Assuming you want to clear user data upon deletion
    } catch (error) {
      console.error(error.message);
    }
  };

  //READ A USER


  //GET USER BY ID
  const contextValue = {
    userData,
    setUserData,
    signUp: signUpHandler,
    updateUser: updateUserHandler,
    deleteUser: deleteUserHandler,
  };

  // PropTypes
  UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <UserContext.Provider value={contextValue}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;







