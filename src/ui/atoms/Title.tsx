import React from "react";

interface TitleProps{
    text:string;
    className?: string;
}

const Title: React.FC<TitleProps> = ({text,className}) =>{
return(
    <h1 className={`text-2xl font-bold ${className} mb-6`}> {text}
 </h1>
)

}

export default Title