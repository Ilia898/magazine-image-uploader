interface ButtonConfig {
  cssClass: string;
}

export const buttonsPerPage: { [key: number]: ButtonConfig[] } = {
  1: [{ cssClass: "absolute flex flex-col top-[76px] left-[17px] w-[207px] h-[162px] justify-center items-center" }],
  2: [],
  3: [],
  4: [{ cssClass: "absolute flex flex-col top-[29px] left-[67px] w-[65px] h-[61px] justify-center items-center text-xs font-medium text-whiteText bg-gray" }],
  5: [],
  6: [{ cssClass: "absolute flex flex-col top-[52px] left-[18px] w-[206.5px] h-[171.7px] justify-center items-center" },
      { cssClass: "absolute flex flex-col bottom-[20px] left-[17px] w-[99.5px] h-[89px] justify-center items-center" },
      { cssClass: "absolute flex flex-col bottom-[20px] left-[124px] w-[99.5px] h-[89px] justify-center items-center" }
     ],
  7: [],
  8: [],
  9: [{ cssClass: "absolute flex flex-col top-[21px] left-[16px] w-[207px] h-[171px] justify-center items-center" },
      { cssClass: "absolute flex flex-col bottom-[53px] left-[123px] w-[99px] h-[88px] justify-center items-center" }
     ],
  10:[{ cssClass: "absolute flex flex-col top-[21px] left-[16px] w-[207px] h-[171px] justify-center items-center" },
      { cssClass: "absolute flex flex-col bottom-[54px] left-[16.5px] w-[99px] h-[89px] justify-center items-center" }
     ],
  11: [],
  12: [],
  13: [{ cssClass: "absolute flex flex-col top-[20px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[85px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[19.5px] left-[16.5px] w-[136.5px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[17px] w-[99.5px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[122px] w-[100px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[21px] left-[120px] w-[103px] h-[64px] justify-center items-center" }
      ],
  14: [{ cssClass: "absolute flex flex-col top-[52px] left-[18px] w-[206.5px] h-[171.7px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[17px] w-[99.5px] h-[89px] justify-center items-center text-sm" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[124px] w-[99.5px] h-[89px] justify-center items-center" }
      ],
  15: [],
  16: [],
  17: [{ cssClass: "absolute flex flex-col top-[21px] left-[16px] w-[207px] h-[171px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[19.5px] left-[87px] w-[136px] h-[123px] justify-center items-center" }
      ],
  18: [{ cssClass: "absolute flex flex-col top-[21px] left-[16px] w-[207px] h-[171px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[54px] left-[16.5px] w-[99px] h-[89px] justify-center items-center" }
      ],
  19: [],
  20: [],
  21: [{ cssClass: "absolute flex flex-col top-[20px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[85px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[19.5px] left-[16.5px] w-[136.5px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[17px] w-[99.5px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[122px] w-[100px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[21px] left-[120px] w-[103px] h-[64px] justify-center items-center" }
      ],
  22: [{ cssClass: "absolute flex flex-col top-[52px] left-[18px] w-[206.5px] h-[171.7px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[17px] w-[99.5px] h-[89px] justify-center items-center text-sm" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[124px] w-[99.5px] h-[89px] justify-center items-center" }
      ],
  23: [],
  24: [{ cssClass: "absolute flex flex-col top-[21px] left-[16px] w-[207px] h-[171px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[50px] left-[16.5px] w-[99px] h-[89px] justify-center items-center" }
      ],
  25: [],
  26: [],
  27: [{ cssClass: "absolute flex flex-col top-[21px] left-[16px] w-[207px] h-[171px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[51px] left-[123.5px] w-[99px] h-[89px] justify-center items-center" }
      ],
  28: [{ cssClass: "absolute flex flex-col top-[20px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[85px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[19.5px] left-[16.5px] w-[136.5px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[17px] w-[99.5px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[122px] w-[100px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[21px] left-[17px] w-[103px] h-[64px] justify-center items-center" }
      ],
  29: [],
  30: [],
  31: [{ cssClass: "absolute flex flex-col top-[51.5px] left-[16.5px] w-[207px] h-[172px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[123px] w-[99px] h-[88px] justify-center items-center" }
      ],
  32: [],
  33: [{ cssClass: "absolute flex flex-col top-[21px] left-[16px] w-[207px] h-[171px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[21px] left-[86px] w-[137px] h-[123.5px] justify-center items-center" }
      ],
  34: [{ cssClass: "absolute flex flex-col top-[20.5px] left-[16px] w-[207px] h-[171px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[16.2px] w-[137px] h-[124px] justify-center items-center" }
      ],
  35: [],
  36: [],
  37: [{ cssClass: "absolute flex flex-col top-[20px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[85px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[19.5px] left-[16.5px] w-[136.5px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[17px] w-[99.5px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[122px] w-[100px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[21px] left-[120px] w-[103px] h-[64px] justify-center items-center" }
      ],
  38: [{ cssClass: "absolute flex flex-col top-[52px] left-[18px] w-[206.5px] h-[171.7px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[17px] w-[99.5px] h-[89px] justify-center items-center text-sm" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[124px] w-[99.5px] h-[89px] justify-center items-center" }
      ],
  39: [],
  40: [],
  41: [{ cssClass: "absolute flex flex-col top-[21px] left-[16.5px] w-[207px] h-[171.5px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[19.9px] left-[87px] w-[136px] h-[123.5px] justify-center items-center" }
      ],
  42: [],
  43: [{ cssClass: "absolute flex flex-col top-[20px] left-[16.5px] w-[100px] h-[90px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[20px] left-[124px] w-[100px] h-[90px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[50px] left-[17px] w-[207px] h-[172px] justify-center items-center" }
      ],
  44: [{ cssClass: "absolute flex flex-col top-[52px] left-[18px] w-[206.5px] h-[171.7px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[17px] w-[99.5px] h-[89px] justify-center items-center text-sm" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[124px] w-[99.5px] h-[89px] justify-center items-center" }
      ],
  45: [],
  46: [{ cssClass: "absolute flex flex-col top-[20.7px] left-[16.5px] w-[207px] h-[172px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[16.5px] w-[136px] h-[123.5px] justify-center items-center" }
      ],
  47: [],
  48: [{ cssClass: "absolute flex flex-col top-[20px] left-[16.5px] w-[114px] h-[98px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[121px] left-[16.5px] w-[114px] h-[98px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[16.5px] w-[114px] h-[98px] justify-center items-center" }
      ],
  49: [],
  50: [{ cssClass: "absolute flex flex-col top-[45px] left-[136px] w-[104px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[170px] left-[136px] w-[104px] h-[125px] justify-center items-center" }
      ],
  51: [{ cssClass: "absolute flex flex-col top-[45px] left-[0px] w-[104px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[170px] left-[0px] w-[104px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[45px] left-[104px] w-[104px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[170px] left-[104px] w-[104px] h-[125px] justify-center items-center" }
      ],
  52: [],
  53: [{ cssClass: "absolute flex flex-col top-[20px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[85px] left-[156.5px] w-[66px] h-[59px] justify-center items-center text-xs font-semibold" },
       { cssClass: "absolute flex flex-col top-[19.5px] left-[16.5px] w-[136.5px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[17px] w-[99.5px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[90.5px] left-[122px] w-[100px] h-[101px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[21px] left-[120px] w-[103px] h-[64px] justify-center items-center" }
      ],
  54: [{ cssClass: "absolute flex flex-col top-[20.5px] left-[16px] w-[207px] h-[172px] justify-center items-center" },
       { cssClass: "absolute flex flex-col bottom-[20px] left-[16.2px] w-[137px] h-[124px] justify-center items-center" }
      ],
  55: [],
  56: [{ cssClass: "absolute flex flex-col top-[35px] left-[136px] w-[104px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[160px] left-[136px] w-[104px] h-[125px] justify-center items-center" }
      ],
  57: [{ cssClass: "absolute flex flex-col top-[35px] left-[0px] w-[104px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[160px] left-[0px] w-[104px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[35px] left-[104px] w-[104px] h-[125px] justify-center items-center" },
       { cssClass: "absolute flex flex-col top-[160px] left-[104px] w-[104px] h-[125px] justify-center items-center" }
      ],
  58: [],
  59: [],
  60: [],
  
    // Add more pages as needed...
  };
