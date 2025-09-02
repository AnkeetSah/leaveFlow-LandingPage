// TechIcons.js
import { 
  RiMailLine, 
  RiFileExcelLine, 
  RiShieldCheckLine, 
  RiFileListLine, 
  RiDashboardLine, 
  RiGitBranchLine,
  RiCakeLine 
} from "react-icons/ri";

// Simple icon components for technologies not in react-icons
type IconProps = {
  className?: string;
};

export const TypescriptIcon = ({ className }: IconProps) => (
  <div className={className}>TS</div>
);

export const JavascriptIcon = ({ className }: IconProps) => (
  <div className={className}>JS</div>
);

export { 
  RiMailLine, 
  RiFileExcelLine, 
  RiShieldCheckLine, 
  RiFileListLine, 
  RiDashboardLine, 
  RiGitBranchLine,
  RiCakeLine 
};