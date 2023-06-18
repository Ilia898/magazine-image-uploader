interface ButtonConfig {
  cssClass: string;
}

export const buttonsPerPage: { [key: number]: ButtonConfig[] } = {
    1: [{ cssClass: "btn-red" }],
    2: [
      { cssClass: "btn-blue" },
      { cssClass: "btn-blue" },
      { cssClass: "btn-blue" },
    ],
    3: [{ cssClass: "btn-green" }, { cssClass: "btn-green" }],
    // Add more pages as needed...
  };
