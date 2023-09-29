import { useState } from "react"

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!title || !description) {
          alert("Title and description are required.");
          return;
        }
    
        try {
          const res = await fetch("http://localhost:3000/api/topics", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ title, description }),
          });
    
          if (res.ok) {
            router.push("/");
          } else {
            throw new Error("Failed to create a topic");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
    return(
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Titulo do tópico" className="border border-slate-500 px-8 py-2"/>
            <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Descrição do tópico" className="border border-slate-500 px-8 py-2"/>
            <button type="submit" className="bg-green-600 text-white font-bold w-fit py-3 px-6">Adicionar</button>
        </form>
        </>
    )
}