import React from "react";
import HomeCard from "./display/HomeCard";

const introduction = [
    {
        id: 0,
        title: "Get Certificates",
        description: "Fetch all your certificates stored in blockchain and spend amount of gas",
        button: "Get"
    },
    {
        id: 1,
        title: "Issue Certificates",
        description: "Send your certificates to issuer to verify and commit it to blockchain",
        button: "Issue"
    },
    {
        id: 2,
        title: "Revoke Certificates",
        description: "Send revocation request to issuer to verify and execute revocation process",
        button: "Revoke"
    },
    {
        id: 3,
        title: "Share Certificates",
        description: "Share your certificates with another user. They can view and check your information.",
        button: "Share"
    }
]

function Home () {
    return (
        <div className="flex justify-evenly">
            {introduction.map((instance) => 
                <HomeCard
                    title={instance.title}
                    description={instance.description}
                    button={instance.button}
            />)}
        </div>
    )
}

export default Home;