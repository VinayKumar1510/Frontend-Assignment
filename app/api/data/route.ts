import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { DataItem } from "@/types";

export async function GET(req: Request) {
  try {
    const filePath = path.join(process.cwd(), "data", "MOCK_DATA1.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    let data: DataItem[] = JSON.parse(jsonData);

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const search = searchParams.get("search")?.toLowerCase() || "";
    const issue = searchParams.get("category")?.toLowerCase() || "";

    // Filtering
    if (search) {
      data = data.filter((item) =>
        item.patient_name.toLowerCase().includes(search)
      );
    }
    if (issue) {
      data = data.filter(
        (item) => item.medical_issue.toLowerCase() === issue
      );
    }

    const total = data.length;
    const start = (page - 1) * limit;
    const paginatedData = data.slice(start, start + limit);

    return NextResponse.json({ success: true, data: paginatedData, total });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Error reading data" },
      { status: 500 }
    );
  }
}
