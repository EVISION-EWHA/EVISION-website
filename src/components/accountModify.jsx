import React from "react";
//import { useHistory } from "react-router-dom";

function accountModify(){

    return(
    <div className = "AccountModify">
    <h2>회원정보 수정</h2>
    <form  method="get">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" />
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" />
    <input type="submit" value="Submit" />
    </form>
    </div>
    );
}

export default accountModify();

