'use client';
import SimpleDropdown from '@/components/shared/chartDropDown';
import {
  ArrowUp02Icon,
  Blockchain01Icon,
  UsersRoundIcon,
} from '@hugeicons/core-free-icons';

import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

import { HugeiconsIcon } from '@hugeicons/react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { MoreVertical } from 'lucide-react';

const percent = 75.5;
const profitData = [{ name: 'target', value: percent, fill: '#5B6EF5' }];
const data = [
  { month: 'Jan', sales: 150 },
  { month: 'Feb', sales: 380 },
  { month: 'Mar', sales: 180 },
  { month: 'Apr', sales: 280 },
  { month: 'May', sales: 170 },
  { month: 'Jun', sales: 180 },
  { month: 'Jul', sales: 270 },
  { month: 'Aug', sales: 90 },
  { month: 'Sep', sales: 200 },
  { month: 'Oct', sales: 380 },
  { month: 'Nov', sales: 260 },
  { month: 'Dec', sales: 100 },
];

export default function Home() {
  return (
    <section className="grid grid-cols-12 gap-6 p-6 mx-auto max-w-(--breakpoint-2xl)">
      <div className="grid grid-cols-2 col-span-7 gap-6">
        <div className="rounded-2xl border bg-white p-5">
          <div className="flex flex-col gap-2">
            <div className="flex size-12 items-center justify-center rounded-xl bg-gray-100">
              <HugeiconsIcon icon={UsersRoundIcon} />
            </div>

            <span className="text-sm text-gray-500 mt-2.5">Customers</span>
          </div>

          <div className="mt-2.5 flex items-center justify-between">
            <h4 className="text-3xl font-bold">3,343</h4>

            <span className="flex items-center gap-1 rounded-full bg-success-50 px-2.5 py-1 text-sm text-success-600">
              <HugeiconsIcon icon={ArrowUp02Icon} className="size-4" />
              11.01
            </span>
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-5">
          <div className="flex flex-col gap-2">
            <div className="flex size-12 items-center justify-center rounded-xl bg-gray-100">
              <HugeiconsIcon icon={Blockchain01Icon} />
            </div>

            <span className="text-sm text-gray-500 mt-3">Orders</span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h4 className="text-3xl font-bold">3,343</h4>

            <span className="flex items-center gap-1 rounded-full bg-success-50 px-2.5 py-1 text-sm text-success-600">
              <HugeiconsIcon icon={ArrowUp02Icon} className="size-4" />
              11.01%
            </span>
          </div>
        </div>
        <div className="col-span-full">
          <div className="w-full h-62.5 bg-white rounded-xl p-6 pb-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className=" text-lg font-semibold text-gray-800 ">
                Monthly Sales
              </h2>
              <SimpleDropdown
                onViewMore={() => console.log('View more clicked')}
                onDelete={() => console.log('Delete clicked')}
              />
            </div>

            <ResponsiveContainer width="100%" height="70%">
              <BarChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 11 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={true}
                  tick={{ fill: '#6b7280', fontSize: 11 }}
                  domain={[0, 400]}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                />
                <Bar
                  dataKey="sales"
                  fill="#465fff" // همون آبی تصویر
                  radius={[6, 6, 0, 0]} // گوشه‌های بالای میله‌ها گرد
                  barSize={20} // ضخامت میله‌ها
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <div className="mx-auto flex size-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 shadow-sm">
          <div className="rounded-b-2xl bg-white h-91.5">
            <div className="flex items-start justify-between p-5 pb-0">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Monthly Target
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Target you&apos;ve set for each month
                </p>
              </div>

              <button className="text-gray-300 hover:text-gray-400">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="relative mt-2 flex h-47.5 items-center justify-center">
              <RadialBarChart
                width={320}
                height={170}
                cx="50%"
                cy="88%"
                innerRadius={110}
                outerRadius={145}
                barSize={12}
                startAngle={180}
                endAngle={0}
                data={profitData}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />

                <RadialBar
                  background={{ fill: '#EEF0F5' }}
                  dataKey="value"
                  cornerRadius={30}
                  angleAxisId={0}
                />
              </RadialBarChart>

              <div className="absolute top-[43%] flex flex-col items-center">
                <span className="text-4xl font-semibold text-gray-900">
                  {percent}%
                </span>

                <span className="mt-2 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
                  +10%
                </span>
              </div>
            </div>

            <p className="mx-auto max-w-104 px-6 pb-5 text-center text-md leading-relaxed text-gray-500">
              You earn $3287 today, it&apos;s higher than last month.
              <br />
              Keep up your good work!
            </p>
          </div>

          <div className="flex flex-1 gap-8 place-content-center items-center">
            <div className="flex flex-col items-center justify-center ">
              <h4 className="mb-1 text-sm text-gray-500">Target</h4>

              <div className="flex items-center gap-1.5">
                <span className="text-lg font-semibold text-gray-900">
                  $20k
                </span>

                <span className="text-error-500">↓</span>
              </div>
            </div>
            <div className="h-7 w-px bg-gray-200 dark:bg-gray-800"></div>

            <div className="flex flex-col items-center justify-center">
              <h4 className="mb-1 text-sm text-gray-500">Revenue</h4>

              <div className="flex items-center gap-1.5">
                <span className="text-lg font-semibold text-gray-900">
                  $18k
                </span>

                <span className="text-error-500">↓</span>
              </div>
            </div>
            <div className="h-7 w-px bg-gray-200 dark:bg-gray-800"></div>

            <div className="flex flex-col items-center justify-center">
              <h4 className="mb-1 text-sm text-gray-500">Today</h4>

              <div className="flex items-center gap-1.5">
                <span className="text-lg font-semibold text-gray-900">
                  $3.2k
                </span>

                <span className="text-success-500 rotate-180">↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from 'react';

// const percent = 75.55;

// export default function MonthlyTarget() {
//   return (

//   );
// }

// function Stat({ label, value, direction }) {
//   const isUp = direction === "up";
//   return (
//     <div className="flex flex-col items-center gap-1">
//       <span className="text-gray-500 text-xs">{label}</span>
//       <div className="flex items-center gap-1">
//         <span className="text-gray-900 font-semibold text-sm">{value}</span>
//         {isUp ? (
//           <ArrowUp size={14} className="text-emerald-500" />
//         ) : (
//           <ArrowDown size={14} className="text-red-500" />
//         )}
//       </div>
//     </div>
//   );
// }
