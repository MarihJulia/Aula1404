import { NextResponse } from "next/server";
 
 export async function GET() {
     return NextResponse.json({"Aluno" : "Maria Júlia Costa"});
 }