const checkValidData = (email, Password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      Password
    );

  if (!isEmailValid) return " Email Id is not valid 🥱";
  if (!isPasswordValid) return " Password is not valid 🥱";

  return null;
};

export default checkValidData;
