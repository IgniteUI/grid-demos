import { DataPoint } from "./dataModels";

const trendDataPoints: any[][] = [
  [
    { unitsSold: 12 }, { unitsSold: 95 }, { unitsSold: 33 }, { unitsSold: 110 },
    { unitsSold: 5 }, { unitsSold: 150 }, { unitsSold: 48 }, { unitsSold: 77 },
    { unitsSold: 25 }, { unitsSold: 140 }, { unitsSold: 66 }, { unitsSold: 9 }
  ],
  [
    { unitsSold: 50 }, { unitsSold: 25 }, { unitsSold: 90 }, { unitsSold: 130 },
    { unitsSold: 22 }, { unitsSold: 5 }, { unitsSold: 110 }, { unitsSold: 67 },
    { unitsSold: 80 }, { unitsSold: 15 }, { unitsSold: 145 }, { unitsSold: 38 }
  ],
  [
    { unitsSold: 140 }, { unitsSold: 60 }, { unitsSold: 75 }, { unitsSold: 28 },
    { unitsSold: 135 }, { unitsSold: 15 }, { unitsSold: 40 }, { unitsSold: 95 },
    { unitsSold: 12 }, { unitsSold: 110 }, { unitsSold: 55 }, { unitsSold: 12 }
  ],
  [
    { unitsSold: 90 }, { unitsSold: 7 }, { unitsSold: 115 }, { unitsSold: 20 },
    { unitsSold: 98 }, { unitsSold: 33 }, { unitsSold: 150 }, { unitsSold: 78 },
    { unitsSold: 55 }, { unitsSold: 35 }, { unitsSold: 140 }, { unitsSold: 20 }
  ],
  [
    { unitsSold: 15 }, { unitsSold: 130 }, { unitsSold: 110 }, { unitsSold: 48 },
    { unitsSold: 140 }, { unitsSold: 10 }, { unitsSold: 25 }, { unitsSold: 95 },
    { unitsSold: 70 }, { unitsSold: 135 }, { unitsSold: 8 }, { unitsSold: 5 }
  ],
  [
    { unitsSold: 130 }, { unitsSold: 55 }, { unitsSold: 20 }, { unitsSold: 99 },
    { unitsSold: 65 }, { unitsSold: 120 }, { unitsSold: 10 }, { unitsSold: 138 },
    { unitsSold: 75 }, { unitsSold: 30 }, { unitsSold: 150 }, { unitsSold: 14 }
  ],
  [
    { unitsSold: 18 }, { unitsSold: 110 }, { unitsSold: 145 }, { unitsSold: 22 },
    { unitsSold: 77 }, { unitsSold: 38 }, { unitsSold: 135 }, { unitsSold: 9 },
    { unitsSold: 50 }, { unitsSold: 150 }, { unitsSold: 120 }, { unitsSold: 7 }
  ],
  [
    { unitsSold: 150 }, { unitsSold: 42 }, { unitsSold: 9 }, { unitsSold: 100 },
    { unitsSold: 40 }, { unitsSold: 125 }, { unitsSold: 130 }, { unitsSold: 5 },
    { unitsSold: 90 }, { unitsSold: 75 }, { unitsSold: 18 }, { unitsSold: 28 }
  ],
  [
    { unitsSold: 45 }, { unitsSold: 75 }, { unitsSold: 140 }, { unitsSold: 15 },
    { unitsSold: 55 }, { unitsSold: 120 }, { unitsSold: 135 }, { unitsSold: 33 },
    { unitsSold: 5 }, { unitsSold: 110 }, { unitsSold: 22 }, { unitsSold: 10 }
  ],
  [
    { unitsSold: 100 }, { unitsSold: 8 }, { unitsSold: 130 }, { unitsSold: 75 },
    { unitsSold: 35 }, { unitsSold: 55 }, { unitsSold: 145 }, { unitsSold: 20 },
    { unitsSold: 115 }, { unitsSold: 40 }, { unitsSold: 140 }, { unitsSold: 10 }
  ],
  [
    { unitsSold: 20 }, { unitsSold: 145 }, { unitsSold: 8 }, { unitsSold: 70 },
    { unitsSold: 12 }, { unitsSold: 150 }, { unitsSold: 48 }, { unitsSold: 33 },
    { unitsSold: 130 }, { unitsSold: 22 }, { unitsSold: 115 }, { unitsSold: 9 }
  ],
  [
    { unitsSold: 150 }, { unitsSold: 60 }, { unitsSold: 22 }, { unitsSold: 5 },
    { unitsSold: 98 }, { unitsSold: 75 }, { unitsSold: 35 }, { unitsSold: 135 },
    { unitsSold: 80 }, { unitsSold: 25 }, { unitsSold: 140 }, { unitsSold: 18 }
  ],
  [
    { unitsSold: 85 }, { unitsSold: 130 }, { unitsSold: 55 }, { unitsSold: 12 },
    { unitsSold: 150 }, { unitsSold: 90 }, { unitsSold: 30 }, { unitsSold: 60 },
    { unitsSold: 5 }, { unitsSold: 140 }, { unitsSold: 48 }, { unitsSold: 23 }
  ],
  [
    { unitsSold: 25 }, { unitsSold: 100 }, { unitsSold: 150 }, { unitsSold: 15 },
    { unitsSold: 80 }, { unitsSold: 120 }, { unitsSold: 55 }, { unitsSold: 5 },
    { unitsSold: 110 }, { unitsSold: 130 }, { unitsSold: 22 }, { unitsSold: 6 }
  ],
  [
    { unitsSold: 10 }, { unitsSold: 140 }, { unitsSold: 50 }, { unitsSold: 60 },
    { unitsSold: 120 }, { unitsSold: 20 }, { unitsSold: 130 }, { unitsSold: 150 },
    { unitsSold: 35 }, { unitsSold: 5 }, { unitsSold: 100 }, { unitsSold: 15 }
  ],
  [
    { unitsSold: 55 }, { unitsSold: 150 }, { unitsSold: 12 }, { unitsSold: 110 },
    { unitsSold: 22 }, { unitsSold: 140 }, { unitsSold: 5 }, { unitsSold: 100 },
    { unitsSold: 48 }, { unitsSold: 135 }, { unitsSold: 20 }, { unitsSold: 22 }
  ],
  [
    { unitsSold: 150 }, { unitsSold: 12 }, { unitsSold: 140 }, { unitsSold: 5 },
    { unitsSold: 95 }, { unitsSold: 25 }, { unitsSold: 130 }, { unitsSold: 35 },
    { unitsSold: 80 }, { unitsSold: 110 }, { unitsSold: 75 }, { unitsSold: 14 }
  ]
];

const periodYear: string = '2024';
const PeriodLabels: string[] = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const addMonthLabels = (dataPoints: any[][]): DataPoint[][] => {
  return dataPoints.map((subArray: any[]) =>
    subArray.map((item: any, index: number) => ({
      ...item,
      month: `${PeriodLabels[index]} ${periodYear}`,
    }))
  );
};

export const TREND_DATA: DataPoint[][] = addMonthLabels(trendDataPoints);
