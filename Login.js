import React from "react";
import {view, text, image} from "react-native"

export default function Login() {

    return (
    <view style ={{ flex: 1, backgroundColor: "red"}}>
        <image 
        style={{
            width: 150,
            height: 150,
        }}
        source={{
            //URL:A1.jpg
        }}
        />
        <text style={{ color: "black"}}> HI</text>

    </view>
    );
}