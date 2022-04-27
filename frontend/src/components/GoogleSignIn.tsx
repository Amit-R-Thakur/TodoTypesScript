import React from "react";
import { FcBrokenLink,FcGoogle } from "react-icons/fc";
import {Button} from "@mui/material"
const responseGoogle = (res: any) => {
  console.log(res);
};
const googleErr=(err:any)=>{
    console.log(err)
}

function GoogleSignIn() {
  return (
    <div className="gs">
      <div className="gmain">
        <div className="appicon">
          <FcBrokenLink size={150} />
        </div>
        <div className="appHeading">
          <h3>Welcome to Todo Application </h3>
        </div>
        <div className="gicon">
          <Button variant="outlined" startIcon={<FcGoogle/>}>Login With Google</Button>
        </div>
      </div>
    </div>
  );
}

export default GoogleSignIn;
