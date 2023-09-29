import React from "react";
import RemoveButton from "./RemoveButton";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";

const pegarTopicos = async () => {
    try{
        const res = await fetch("https://localhost:3000/api/topics", {
        cache: "no-store",
        })
        if (!res.ok){
            throw new Error("Falha na conexão do fetch dos tópicos")
        }
        return res.json()
    } catch(error){
        console.log("Error ao carregar os tópicos: ", error)
    }
}
export default async function TopicsList(){
    const topics = await pegarTopicos()
    return(
        <>
        {topics.map(t => (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div className="text-black-800 font-bold">
                <h2>{t.title}</h2>
                <div>{t.description}</div>
            </div>
            <div className="flex gap-2">
                <RemoveButton size={24}/>
                <Link href={`/editTopic/${t._id}`}>
                <FiEdit size={24}/>
                </Link>
            </div>
        </div>
        ))}
        </>
    )
}