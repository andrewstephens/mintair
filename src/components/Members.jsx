import React from "react";

const teamMembers = [
  "Vinny",
  "Remy",
  "Jake",
  "Bryce",
  "Lisa",
  "Leonardo",
  "Brian",
  "Doug",
  "Erick",
];

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const MeetTheTeam = () => {
  return (
    <section
      style={{
        padding: "4rem 1rem",
        backgroundColor: "#f9fafb",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "2rem",
        }}
      >
        Meet the Team
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {teamMembers.map((name) => (
          <div
            key={name}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              border: "1px solid #e5e7eb",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              width: "200px",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0, 0, 0, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.08)";
            }}
          >
            <div
              style={{
                width: "100%",
                paddingBottom: "100%", // 1:1 aspect ratio
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                src={`/assets/mintteam/${name}.jpeg`}
                alt={name}
                loading="lazy"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 0.3s ease",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <p
              style={{
                marginTop: "0.75rem",
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              {capitalize(name)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
