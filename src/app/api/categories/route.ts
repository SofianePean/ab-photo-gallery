import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "../../../../types/supabase";

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    return NextResponse.json(error, { status: 500 });
  }

  const origin = request.headers.get("origin");

  return new NextResponse(JSON.stringify(categories), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": origin || "*",
    },
  });
}
