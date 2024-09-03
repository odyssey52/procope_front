import styled from "styled-components";

interface DotProps {
  $small?: boolean;
  $status?: "success" | "warning" | "error" | "info";
}

const Dot = styled.span<DotProps>`
  ${({ $small }) =>
    $small ? "width: 4px; height: 4px;" : "width: 8px; height: 8px;"};

  background-color: ${({ $status, theme }) => {
    switch ($status) {
      case "success":
        return theme.sementicColors.bg.success_bold;
      case "warning":
        return theme.sementicColors.bg.warning_bold;
      case "error":
        return theme.sementicColors.bg.danger;
      case "info":
        return theme.sementicColors.bg.info_bold;
      default:
        return theme.sementicColors.bg.primary;
    }
  }};
  border-radius: 50%;
`;

Dot.displayName = "Dot";

export default Dot;
