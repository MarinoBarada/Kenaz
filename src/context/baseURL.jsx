import React, { createContext } from "react";
import { useLocation } from "react-router-dom";

const location = useLocation();
const path = location.protocol + "//" + location.host;

const baseURL = createContext(path);

export default baseURL;
