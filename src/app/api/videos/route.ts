import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/videos`;
    console.log("🚀 ~ GET ~ url:", url)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: JSON.stringify(error), data: null },
      { status: 500 }
    );
  }
}
