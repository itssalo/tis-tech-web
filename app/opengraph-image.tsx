import { ImageResponse } from "next/og";

export const runtime = "edge";

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
          background: "#ffffff",
          padding: "70px 85px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "45px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  background: "#02A8E2",
                }}
              />

              <div
                style={{
                  width: "42px",
                  height: "42px",
                  background: "#ffffff",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  background: "#8A98A3",
                }}
              />

              <div
                style={{
                  width: "42px",
                  height: "42px",
                  background: "#F36454",
                }}
              />
            </div>
          </div>
        </div>

        {/* Brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              letterSpacing: "-2px",
              color: "#343A40",
              lineHeight: 1,
            }}
          >
            TIS TECH
          </div>

          <div
            style={{
              marginTop: "18px",
              fontSize: "32px",
              fontWeight: 500,
              color: "#02A8E2",
            }}
          >
            Soluciones Tecnológicas
          </div>

          <div
            style={{
              marginTop: "28px",
              width: "760px",
              fontSize: "24px",
              lineHeight: 1.4,
              color: "#8A98A3",
            }}
          >
            Integramos tecnología y servicios para empresas e industrias.
          </div>
        </div>

        {/* Accent line */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: "85px",
            bottom: "70px",
            width: "1030px",
            height: "6px",
          }}
        >
          <div
            style={{
              width: "65%",
              background: "#02A8E2",
            }}
          />

          <div
            style={{
              width: "35%",
              background: "#F36454",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}