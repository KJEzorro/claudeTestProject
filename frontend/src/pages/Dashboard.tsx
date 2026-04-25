import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const mockData = [
  { month: '11월', sales: 3200000 },
  { month: '12월', sales: 4100000 },
  { month: '1월', sales: 2800000 },
  { month: '2월', sales: 3600000 },
  { month: '3월', sales: 4500000 },
  { month: '4월', sales: 3900000 },
]

const stats = [
  { label: '이번달 매출', value: '3,900,000원', color: 'bg-blue-500' },
  { label: '이번달 지출', value: '1,200,000원', color: 'bg-red-500' },
  { label: '순이익', value: '2,700,000원', color: 'bg-green-500' },
  { label: '재고 부족', value: '3개 품목', color: 'bg-yellow-500' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">대시보드</h1>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className={`w-2 h-2 rounded-full ${color} mb-3`} />
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-xl font-bold text-gray-800 mt-1">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-base font-semibold text-gray-700 mb-4">월별 매출 현황</h2>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={mockData}>
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `${(v / 10000).toFixed(0)}만`} />
            <Tooltip formatter={(v) => [`${Number(v).toLocaleString()}원`, '매출']} />
            <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
