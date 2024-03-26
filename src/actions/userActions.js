"use server";

//client shouldn't check authentification, only server

// import { cookies } from "next/headers";
const { cookies } = require("next/headers");

import { redirect } from "next/navigation";

export const authenticateUser = (formData) => {
  // console.log(formData);
  const email = formData.get("email");
  if (email === "pock@pock.com") {
    cookies().set("userId", 1);
    const userId = Number(cookies().get("userId")?.value);
    // console.log("userID", userId);
    redirect("/albums");
  } else {
    // console.log("not user", userId);
    redirect("/");
  }
};
