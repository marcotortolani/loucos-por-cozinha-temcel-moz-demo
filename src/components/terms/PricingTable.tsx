// src/components/terms/PricingTable.tsx

import React from 'react'

interface PricingRow {
  serviceType: string
  daily: string
  weekly: string
  monthly: string
}

interface PricingTableProps {
  rows: PricingRow[]
}

export const PricingTable: React.FC<PricingTableProps> = ({ rows }) => {
  return (
    <>
      {/* Mobile-first: Card layout for small screens */}
      <div className="w-full flex flex-col gap-4 md:hidden">
        {rows.map((row, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            {/* Service Type Header */}
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
              <h3 className="font-semibold text-sm">{row.serviceType}</h3>
            </div>

            {/* Pricing Details */}
            <div className="divide-y divide-gray-200">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-sm text-gray-600">Assinatura diária</span>
                <span className="text-sm font-bold">{row.daily}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-sm text-gray-600">Semanal</span>
                <span className="text-sm font-bold">{row.weekly}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-sm text-gray-600">Mensal</span>
                <span className="text-sm font-bold">{row.monthly}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet and Desktop: Traditional table layout */}
      <div className="w-full overflow-x-auto hidden md:block">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-sm lg:text-base">
                Tipo de Serviço de Conteúdo
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-sm lg:text-base">
                Assinatura diária
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-sm lg:text-base">
                Semanal
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-sm lg:text-base">
                Mensal
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3 text-sm lg:text-base">
                  {row.serviceType}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm lg:text-base font-semibold">
                  {row.daily}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm lg:text-base font-semibold">
                  {row.weekly}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm lg:text-base font-semibold">
                  {row.monthly}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
