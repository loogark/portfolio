const baseStyle = {
  separator: {
    bg: "#ccf381",
    "&[data-status=complete]": { bg: "#ccf381" },
  },
  indicator: {
    bg: "#fff",
    borderColor: "#fff",
    "&[data-status=complete]": {
      bg: "#ccf381",
      borderColor: "#fff",
      color: "#4831d4",
      borderWidth: "2px",
    },
    "&[data-status=active]": {
      bg: "#ccf381",
      borderColor: "#fff",
      color: "#4831d4",
    },
    "&[data-status=incomplete]": {
      borderColor: "#ccf381",
      color: "#4831d4",
      borderWidth: "2px",
    },
  },
  title: {
    color: "#ccf381",
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
  },
};

export const stepperTheme = {
  baseStyle,
};
