import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request : Request) {
    const {todos} =await request.json();
    //openai dosent work
   // console.log(todos);

    //communicate with open ai
     const response = await openai.createChatCompletion({
        model:"gpt-3.5-turbo-0301",
        temperature:0.8,
        n:1,
        stream:false,
        messages:[
            {
                role:"system",
                content:`When responding, welcome the user always as Mr. Rishu and say welcome to the RK Todo App!
                Limit the response to 200 characters `,
            },
            {
                role:"user",
                content:`Hi there, provide a summary of the following todos. Count how many are in each category such as To do, 
                in progress and done, then tell the user to have a prosuctive day! Here's the data: ${JSON.stringify(todos)}`,
            },
        ],
     });
     const {data} =  response;

   //  console.log("DATA IS",data);
    // console.log(data.choices[0].message);

     return NextResponse.json(data.choices[0].message);
}