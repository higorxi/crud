export default function EditTopicForm(){
    return(
    <>
    <form className="flex flex-col gap-3">
        <input type="text" placeholder="Titulo do tópico" className="border border-slate-500 px-8 py-2"/>
        <input type="text" placeholder="Descrição do tópico" className="border border-slate-500 px-8 py-2"/>
        <button type="submit" className="bg-green-600 text-white font-bold w-fit py-3 px-6">Editar</button>
    </form>
    </>
    )
}