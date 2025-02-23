import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showLoginInfo, setShowLoginInfo] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/white");
  };

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#f0f0f0",
      backgroundImage: "radial-gradient(#b8d9f7 2px, transparent 2px)",
      backgroundSize: "30px 30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "50px 20px",
      position: "relative" as const,
    },
    backgroundSlant: {
      position: "absolute" as const,
      top: 0,
      right: 0,
      width: "70%",
      height: "100%",
      background: "linear-gradient(135deg, transparent 50%, #fff 50%)",
      zIndex: 0,
    },
    logo: {
      position: "absolute" as const,
      top: "40px",
      zIndex: 2,
      width: "100%",
      textAlign: "center" as const,
    },
    logoImage: {
      height: "40px",
    },
    contentWrapper: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      marginTop: "100px",
      position: "relative" as const,
      zIndex: 2,
      width: "100%",
      maxWidth: "1200px",
    },
    leftContent: {
      width: "600px",
      position: "relative" as const,
    },
    laptopImage: {
      width: "100%",
      display: showLoginInfo ? "none" : "block",
      position: "absolute" as const,
      top: "0",
      left: "0",
    },
    modal: {
      display: showLoginInfo ? "block" : "none",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      width: "100%",
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    modalTitle: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    closeButton: {
      border: "none",
      background: "none",
      fontSize: "20px",
      cursor: "pointer",
      color: "#666",
    },
    modalContent: {
      fontSize: "14px",
      lineHeight: "1.6",
    },
    modalSection: {
      marginBottom: "20px",
    },
    modalSectionTitle: {
      fontWeight: "bold",
      marginBottom: "10px",
    },
    modalCheckbox: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "20px",
    },
    loginContainer: {
      width: "500px",
    },
    loginBox: {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "30px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
    },
    loginTitle: {
      fontSize: "32px",
      color: "#0066cc",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    lockIcon: {
      fontSize: "28px",
    },
    langSwitch: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    langText: {
      color: "#666",
    },
    switchTrack: {
      width: "60px",
      height: "24px",
      backgroundColor: "#b8d9f7",
      borderRadius: "12px",
      position: "relative" as const,
      cursor: "pointer",
    },
    switchKnob: {
      width: "20px",
      height: "20px",
      backgroundColor: "white",
      borderRadius: "50%",
      position: "absolute" as const,
      top: "2px",
      left: "2px",
    },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      marginBottom: "10px",
      fontSize: "14px",
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "15px",
    },
    helpLinks: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "15px",
      marginBottom: "20px",
    },
    helpLink: {
      fontSize: "14px",
      color: "#666",
      textDecoration: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    helpIcon: {
      width: "16px",
      height: "16px",
      backgroundColor: "#999",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "12px",
    },
    loginButton: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#0066cc",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      marginBottom: "20px",
    },
    warningText: {
      color: "red",
      fontSize: "14px",
      marginBottom: "10px",
    },
    noticeLink: {
      color: "#0066cc",
      textDecoration: "none",
      fontSize: "14px",
      textAlign: "center" as const,
      display: "block",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundSlant} />
      <div style={styles.logo}>
        <img
          src="/api/placeholder/200/50"
          alt="상명대학교 로고"
          style={styles.logoImage}
        />
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.leftContent}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <div style={styles.modalTitle}>로그인/로그아웃 유의사항</div>
              <button
                style={styles.closeButton}
                onClick={() => setShowLoginInfo(false)}
              >
                ×
              </button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.modalSection}>
                <div style={styles.modalSectionTitle}>[로그인]</div>
                <p>
                  학생인 경우 학번으로, 교직원인 경우 교직원번호로 로그인하야
                  합니다.
                </p>
                <p>
                  개인정보보호를 제29조(안전조치 의무), 개인정보의 안전성 확보
                  조치 기준(제4조(접근통제))에 의거하여 교직원은 통합인증 업무
                  등에 2차 인증을 필수로 진행하야 합니다.
                </p>
              </div>
              <div style={styles.modalSection}>
                <div style={styles.modalSectionTitle}>[로그아웃]</div>
                <p>
                  컴퓨터를 타인과 공유하거나 공공장소에서 사용하는 경우 반드시
                  로그아웃 하시기 바랍니다.
                </p>
              </div>
              <div style={styles.modalCheckbox}>
                <input type="checkbox" id="dontShowWeek" />
                <label htmlFor="dontShowWeek">7일 동안 보지 않기</label>
              </div>
            </div>
          </div>
          <img
            src="/api/placeholder/600/400"
            alt="노트북 이미지"
            style={styles.laptopImage}
          />
        </div>

        <div style={styles.loginContainer}>
          <div style={styles.loginBox}>
            <div style={styles.header}>
              <div style={styles.loginTitle}>
                <span style={styles.lockIcon}>🔒</span>
                LOGIN
              </div>
              <div style={styles.langSwitch}>
                <span style={styles.langText}>KOR</span>
                <div style={styles.switchTrack}>
                  <div style={styles.switchKnob}></div>
                </div>
              </div>
            </div>

            <input
              type="text"
              placeholder="학번/교직원번호"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div style={styles.checkboxContainer}>
              <input type="checkbox" id="saveId" />
              <label htmlFor="saveId">학번/교직원번호 저장</label>
            </div>

            <div style={styles.helpLinks}>
              <a style={styles.helpLink}>
                <span style={styles.helpIcon}>?</span>
                비밀번호 초기화
              </a>
              <a style={styles.helpLink}>
                <span style={styles.helpIcon}>?</span>
                학번/교직원번호 조회
              </a>
              <a style={styles.helpLink} onClick={() => setShowLoginInfo(true)}>
                <span style={styles.helpIcon}>?</span>
                로그인/로그아웃 유의사항
              </a>
            </div>

            <button style={styles.loginButton} onClick={handleLogin}>
              로그인
            </button>

            <div style={styles.warningText}>
              ※ 신입생 학번 및 수강신청은 공지사항 게시판을 참조해 주시기
              바랍니다.
            </div>
            <a href="#" style={styles.noticeLink}>
              신입생 관련 공지사항 바로가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
