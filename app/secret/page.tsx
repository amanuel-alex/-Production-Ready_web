import React from "react";
import { auth } from "../auth";

const page = async () => {
  const session = await auth();
  if (!session)
    return <h2 className="text-red-600">you are not authenticated</h2>;

  return <h2 className="text-green-400">welcome to secret section</h2>;
};

export default page;
