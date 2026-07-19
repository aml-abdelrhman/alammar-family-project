import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "مبادرات العمار الخيرية";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // قراءة اللوجو من مسار public المباشر
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo.png"),
    "base64",
  );
  const logoBase64 = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #683c21 0%, #391d0f 100%)",
          color: "white",
          padding: "40px",
        }}
      >
        {/* اللوجو */}
        <img 
          src={logoBase64} 
          alt="Logo" 
          width="250" 
          height="250" 
          style={{ marginBottom: "30px" }} 
        />

        {/* النصوص */}
        <h1 style={{ fontSize: "64px", margin: "10px 0" }}>
          مبادرات العمار الخيرية
        </h1>
        <p style={{ fontSize: "32px", opacity: 0.8 }}>
          التعريف بالأسرة ودعم العمل الخيري
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}