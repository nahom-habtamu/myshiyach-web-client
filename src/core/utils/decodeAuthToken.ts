import jwtDecode from "jwt-decode";
import DecodedTokenResult from "../models/auth/decoded_token_result";

function decodeAuthToken(token: string) {
  return jwtDecode(token) as DecodedTokenResult;
}

export default decodeAuthToken;
