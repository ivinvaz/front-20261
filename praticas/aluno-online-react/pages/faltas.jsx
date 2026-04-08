import Aside from "../components/Aside";
import CardTableTitle from "../components/CardTableTitle";

export default function Faltas(){
    return(
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
            <Aside/>
            <main className="flex-1 flex-col">
                <CardTableTitle/>
            </main >
        </div >
    );
}