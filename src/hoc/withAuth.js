import useAuth from "../customHooks/useAuth";
import { useHistory } from "react-router";

const WithAuth = props => useAuth(props) && props.children;

export default WithAuth;