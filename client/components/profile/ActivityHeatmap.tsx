"use client";

import { useMemo } from "react";

export type ActivityDay = { date: string; count: number };

function level(count: number, max: number) {
  if (count === 0) return 0;
  const ratio = max > 0 ? count / max : 1;
  if (ratio <= 0.2) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.8) return 3;
  return 4;
}

const colors = ["#2d333b", "#c4b5fd", "#a78bfa", "#8b5cf6", "#6d28d9"];

export function ActivityHeatmap({ data, year = new Date().getFullYear() }: { data: ActivityDay[]; year?: number }) {
  const cells = useMemo(() => {
    const byDate = new Map(data.map((entry) => [entry.date.slice(0, 10), Math.max(0, entry.count)]));
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);
    const firstMonday = new Date(start);
    firstMonday.setDate(start.getDate() - ((start.getDay() + 6) % 7));
    const dates: ActivityDay[] = [];
    for (const cursor = new Date(firstMonday); cursor <= end || dates.length < 371; cursor.setDate(cursor.getDate() + 1)) {
      const date = cursor.toISOString().slice(0, 10);
      dates.push({ date, count: byDate.get(date) ?? 0 });
      if (dates.length === 371) break;
    }
    return dates;
  }, [data, year]);
  const max = Math.max(0, ...cells.map((cell) => cell.count));
  const columns = Array.from({ length: 53 }, (_, index) => cells.slice(index * 7, index * 7 + 7));

  return <section className="space-y-4">
    <div className="flex items-end justify-between gap-4"><div><h2 className="text-base font-semibold text-white">Activity</h2><p className="mt-1 text-sm text-muted-gray">{data.length ? `${data.reduce((sum, item) => sum + item.count, 0)} contributions in ${year}` : "No activity yet — start solving to build your streak."}</p></div><div className="hidden items-center gap-1 text-xs text-muted-gray sm:flex"><span>Less</span>{colors.map((color) => <span key={color} className="size-3 rounded-sm" style={{ backgroundColor: color }} />)}<span>More</span></div></div>
    <div className="overflow-x-auto pb-2" role="img" aria-label={`${year} contribution activity heatmap`}>
      <div className="flex min-w-[760px] gap-2">
        <div className="flex w-7 shrink-0 flex-col justify-around pt-5 text-[10px] text-muted-gray"><span>Mon</span><span>Wed</span><span>Fri</span></div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 grid grid-cols-12 text-[10px] text-muted-gray">{Array.from({ length: 12 }, (_, index) => <span key={index}>{new Date(year, index, 1).toLocaleString("en-US", { month: "short" })}</span>)}</div>
          <div className="flex gap-1">
            {columns.map((column, columnIndex) => <div key={columnIndex} className="flex flex-col gap-1">{column.map((cell) => <span key={cell.date} title={cell.count ? `${cell.count} contributions on ${cell.date}` : `No contributions on ${cell.date}`} className="h-3 w-3 rounded-sm" style={{ backgroundColor: colors[level(cell.count, max)] }} />)}</div>)}
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-1 text-xs text-muted-gray sm:hidden"><span>Less</span>{colors.map((color) => <span key={color} className="size-3 rounded-sm" style={{ backgroundColor: color }} />)}<span>More</span></div>
  </section>;
}
