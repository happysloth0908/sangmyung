// Sidebar.tsx
import React from "react";

const Sidebar = () => {
  const styles = {
    sidebar: {
      width: "280px",
      backgroundColor: "#fff",
      height: "100vh",
      borderRight: "1px solid #e0e0e0",
      padding: "15px",
    },
    section: {
      marginBottom: "15px",
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "8px",
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    dot: {
      width: "4px",
      height: "4px",
      backgroundColor: "#4a90e2",
      borderRadius: "50%",
    },
    title: {
      fontSize: "13px",
      color: "#333",
      fontWeight: "500",
    },
    button: {
      backgroundColor: "#333b58",
      color: "white",
      border: "none",
      padding: "2px 12px",
      borderRadius: "3px",
      fontSize: "12px",
      cursor: "pointer",
    },
    select: {
      width: "100%",
      padding: "6px",
      marginBottom: "5px",
      fontSize: "12px",
      border: "1px solid #ddd",
      borderRadius: "3px",
    },
    input: {
      width: "100%",
      padding: "6px",
      marginBottom: "5px",
      fontSize: "12px",
      border: "1px solid #ddd",
      borderRadius: "3px",
    },
    requiredMark: {
      color: "red",
      marginLeft: "2px",
    },
  };

  const sections = [
    { id: "timetable", title: "시험시간표" },
    { id: "cart", title: "장바구니조회", hasButton: true },
    { id: "major", title: "나의주전공강좌", hasButton: true },
    { id: "allDept", title: "전체학과 전공교과목 (전안)", hasButton: true },
    {
      id: "general",
      title: "교양강좌",
      hasButton: true,
      selects: [
        { id: "category", options: ["이수구분"] },
        { id: "area", options: ["영역"] },
      ],
    },
    { id: "teaching", title: "교직강좌", hasButton: true },
    {
      id: "department",
      title: "학과별강좌",
      hasButton: true,
      selects: [
        { id: "college", options: ["대학", "융합공과대학"] },
        { id: "major", options: ["학과(부)", "휴먼지능정보공학전공"] },
        { id: "year", options: ["학년", "2학년"] },
      ],
    },
    { id: "rotc", title: "학군장교강좌", hasButton: true },
    { id: "elective", title: "일반선택강좌", hasButton: true },
    { id: "retake", title: "재수강과목", hasButton: true },
    { id: "credits", title: "취득학점", hasButton: true },
    {
      id: "register",
      title: "수강신청 바로하기",
      hasButton: true,
      buttonText: "신청",
      inputs: [
        { placeholder: "학수번호", required: true },
        { placeholder: "분반", required: true },
      ],
    },
  ];

  return (
    <div style={styles.sidebar}>
      {sections.map((section) => (
        <div key={section.id} style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.titleContainer}>
              <div style={styles.dot}></div>
              <span style={styles.title}>{section.title}</span>
            </div>
            {section.hasButton && (
              <button style={styles.button}>
                {section.buttonText || "조회"}
              </button>
            )}
          </div>

          {section.selects && (
            <div>
              {section.selects.map((select, index) => (
                <select key={index} style={styles.select}>
                  {select.options.map((option, optIndex) => (
                    <option key={optIndex}>{option}</option>
                  ))}
                </select>
              ))}
            </div>
          )}

          {section.inputs && (
            <div>
              {section.inputs.map((input, index) => (
                <div key={index}>
                  <input style={styles.input} placeholder={input.placeholder} />
                  {input.required && <span style={styles.requiredMark}>*</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
