import styles from "./navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import SLogo from "../icons/s-logo.svg";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar} id="navbar">
      <div
        className={styles["logo-container"] + " no-dark"}
        onClick={() => (window.location.href = "/")}
      >
        <SLogo className={styles["logo-img"]} />
        <span className={styles["site-title"]}>Sivan&apos;s AI Space</span>
        <span className={styles["site-title-mobile"]}>Sivan AI</span>
      </div>

      {/* PC Menu */}
      <div className={styles["menu-desktop"]}>
        <a
          href="/"
          onClick={(e) => {
            // 强制刷新跳转，与 Logo 行为一致
            // e.preventDefault(); // 不阻止默认行为，让 href="/" 生效，或者显式调用 window.location.href
          }}
        >
          首页
        </a>
        <a href="/archives">文章全览</a>
        <a
          href="https://blog.csdn.net/weixin_62633072"
          target="_blank"
          rel="noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
        >
          技术博客{" "}
          <i
            className="fas fa-external-link-alt"
            style={{ fontSize: "0.75rem" }}
          ></i>
        </a>

        {/* AI Toolbox Dropdown */}
        <div className={styles["dropdown-group"]}>
          <button className={styles["dropdown-btn"]}>
            AI 工具箱{" "}
            <i
              className="fas fa-chevron-down"
              style={{ fontSize: "0.75rem" }}
            ></i>
          </button>
          <div className={styles["dropdown-menu"]}>
            <a
              href="https://chat.openai.com/"
              target="_blank"
              rel="noreferrer"
              className={styles["dropdown-item"]}
            >
              <i className="fas fa-robot" style={{ color: "#4ade80" }}></i>{" "}
              ChatGPT
            </a>
            <a
              href="https://claude.ai/"
              target="_blank"
              rel="noreferrer"
              className={styles["dropdown-item"]}
            >
              <i className="fas fa-brain" style={{ color: "#fb923c" }}></i>{" "}
              Claude
            </a>
            <a
              href="https://kimi.moonshot.cn/"
              target="_blank"
              rel="noreferrer"
              className={styles["dropdown-item"]}
            >
              <i className="fas fa-moon" style={{ color: "#60a5fa" }}></i> Kimi
            </a>
            <a
              href="https://www.doubao.com/"
              target="_blank"
              rel="noreferrer"
              className={styles["dropdown-item"]}
            >
              <i
                className="fas fa-comment-dots"
                style={{ color: "#c084fc" }}
              ></i>{" "}
              豆包
            </a>
            <a
              href="https://yiyan.baidu.com/"
              target="_blank"
              rel="noreferrer"
              className={styles["dropdown-item"]}
            >
              <i className="fas fa-dragon" style={{ color: "#3b82f6" }}></i>{" "}
              文心一言
            </a>
            <a
              href="https://tongyi.aliyun.com/"
              target="_blank"
              rel="noreferrer"
              className={styles["dropdown-item"]}
            >
              <i className="fas fa-cloud" style={{ color: "#818cf8" }}></i>{" "}
              通义千问
            </a>
            <a
              href="https://www.midjourney.com/"
              target="_blank"
              rel="noreferrer"
              className={styles["dropdown-item"]}
            >
              <i
                className="fas fa-paint-brush"
                style={{ color: "#f472b6" }}
              ></i>{" "}
              Midjourney
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button id="mobile-menu-btn" className={styles["mobile-menu-btn"]}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
}
