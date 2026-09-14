import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "TIS TECH | Soluciones Tecnológicas";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#343A40",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 700,
              color: "#02A8E2",
              letterSpacing: "2px",
            }}
          >
            TIS TECH
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "950px",
            }}
          >
            Soluciones Tecnológicas
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "30px",
              lineHeight: 1.4,
              color: "#6F7B84",
              maxWidth: "900px",
            }}
          >
            Integramos Tecnología para Transformar Negocios
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "70px",
            left: "80px",
            right: "80px",
            height: "6px",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              background: "#02A8E2",
              borderRadius: "6px",
            }}
          />

          <div
            style={{
              display: "flex",
              width: "180px",
              background: "#F36454",
              borderRadius: "6px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "30px",
            right: "80px",
            fontSize: "20px",
            color: "#8A98A3",
          }}
        >
          tistechsolutions.com
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}