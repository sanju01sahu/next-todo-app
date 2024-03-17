import { NextRequest } from "next/server";


export async function POST(req: NextRequest, res:Response){
    const data = await req.json()
    const todos = data.todos;
}