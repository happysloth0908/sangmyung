// Header.tsx
import React from "react";

const Header = () => {
  const styles = {
    header: {
      width: "100%",
      height: "40px",
      backgroundColor: "#1a2f5a",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      color: "white",
      fontFamily: "Arial, sans-serif",
    },
    leftSection: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    logo: {
      height: "20px",
    },
    divider: {
      height: "20px",
      width: "1px",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      margin: "0 10px",
    },
    text: {
      fontSize: "12px",
      color: "rgba(255, 255, 255, 0.9)",
    },
    rightSection: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    button: {
      backgroundColor: "transparent",
      border: "none",
      color: "white",
      cursor: "pointer",
      padding: "4px",
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <img
          src="/api/placeholder/100/20"
          alt="SANGMYUNG"
          style={styles.logo}
        />
        <div style={styles.divider}></div>
        <span style={styles.text}>
          X 컴퓨터를 단말과 공유하거나 공공장소에서 사용하는 경우 반드시
          로그아웃 하시거나 웹 브라우저를 모두 종료해 주세요.
        </span>
      </div>
      <div style={styles.rightSection}>
        <span style={styles.text}>홍길동</span>
        <div style={styles.divider}></div>
        <button style={styles.button}>
          <span style={{ ...styles.text, marginRight: "4px" }}>KOR</span>▼
        </button>
        <div style={styles.divider}></div>
        <button style={styles.button}>
          <span style={styles.text}>로그아웃</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
