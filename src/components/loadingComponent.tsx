// LoadingSpinner.tsx
import React from "react";

interface LoadingSpinnerProps {
  message?: string;
  subMessage?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "처리 중입니다.",
  subMessage = "잠시만 기다려주세요.",
}) => {
  const styles = {
    container: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      zIndex: 9999,
    },
    spinnerBox: {
      backgroundColor: "white",
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "20px 40px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    spinner: {
      width: "20px",
      height: "20px",
      border: "3px solid #f3f3f3",
      borderTop: "3px solid #3498db",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "4px",
    },
    message: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#333",
    },
    subMessage: {
      fontSize: "12px",
      color: "#666",
    },
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  };

  // Add the keyframe animation to the document
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleSheet);

  return (
    <div style={styles.container}>
      <div style={styles.spinnerBox}>
        <div style={styles.spinner}></div>
        <div style={styles.textContainer}>
          <div style={styles.message}>{message}</div>
          <div style={styles.subMessage}>{subMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
