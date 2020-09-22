import React from "react";

type Props = {
  theme?: string;
};

// anchor Data
// 페이지 이동이 아닌 구간이동 네비게이션
interface initNavDate {
  text: string;
  link: string;
}
const initNavDate: initNavDate[] = [
  {
    text: "I AM",
    link: "",
  },
  {
    text: "PROJECT",
    link: "",
  },
  {
    text: "SKILLS",
    link: "",
  },
];

const GlobalNavigationBar: React.FC<Props> = (props) => {
  return (
    <div className="header">
      <div className="header__logo">[LOGO IMG]</div>
      <div className="header__theme-btn">
        {props.theme === "full" ? "PARALLAX THEME" : "FULL THEME"}
      </div>
      <div className="header__nav-list">
        {initNavDate.map((item: initNavDate, index: number) => {
          return (
            <div className="header__nav-item" key={index}>
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobalNavigationBar;
