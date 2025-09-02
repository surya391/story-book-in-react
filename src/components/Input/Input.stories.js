import React from "react";
import Input from "./Input";

export default {
    title: 'form/Input',
    component: Input,
    // decorators:[]
}

export const Small =() =><Input size='small'>Small</Input>
export const Medium = () =><Input size='medium'>Medium</Input>
export const Large = () =><Input size='large'>Large</Input>
