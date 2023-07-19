import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "../../../../types/supabase";

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { data: products, error } = await supabase.from("photos").select(`
    *,  
    category ( id, name )
    `);

  if (error) {
    return NextResponse.json(error, { status: 500 });
  }

  const origin = request.headers.get("origin");

  return new NextResponse(JSON.stringify(products), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": origin || "*",
    },
  });
}
