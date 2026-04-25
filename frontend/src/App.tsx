import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<div className="text-2xl font-bold">매출 관리</div>} />
          <Route path="/inventory" element={<div className="text-2xl font-bold">재고 관리</div>} />
          <Route path="/expenses" element={<div className="text-2xl font-bold">지출 관리</div>} />
          <Route path="/customers" element={<div className="text-2xl font-bold">고객 관리</div>} />
          <Route path="/reports" element={<div className="text-2xl font-bold">보고서</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
