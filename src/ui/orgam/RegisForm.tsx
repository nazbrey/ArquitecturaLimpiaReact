import React from "react";
import FloatingLabelInput from "../molecules/FloatingInput";
import ButtonPrimary from "../atoms/Buttonprimary";
import Title from "../atoms/Title";


const RegisForm: React.FC = () =>{
    return(
        <form className=" flex flex-col items-center ">

        <Title text="Register" />
        <FloatingLabelInput label="Name" type="text"  required/>
        <FloatingLabelInput label="Last Name" type="text" required/>
        <FloatingLabelInput label="Phone" type="text" required/>
        <FloatingLabelInput label="Email" type="email" required/>
        <FloatingLabelInput label="Password" type="password" required/>
        <ButtonPrimary> Submit Form </ButtonPrimary>
        </form>
    );

};

export default RegisForm