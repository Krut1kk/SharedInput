// react
import { FC, ReactNode, useState } from "react";
// assets
import InfoIcon from "@/shared/libs/assets/images/svg/infoIcon.svg?react";
// styles
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  children?: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleMouseEnterAndLeave = () => {
    setIsHovered(!isHovered);
  };

  return (
    <span
      className={styles.Tooltip}
      onMouseEnter={handleToggleMouseEnterAndLeave}
      onMouseLeave={handleToggleMouseEnterAndLeave}
    >
      <InfoIcon />
      {isHovered && <div className={styles.TooltipContent}>{children}</div>}
    </span>
  );
};
