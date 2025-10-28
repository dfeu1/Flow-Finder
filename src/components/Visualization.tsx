import { useEffect, useState } from 'react'
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend, ChartOptions } from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import { FlowResult } from '../types'
import { getZoneColor } from '../utils/flowCalculations'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

interface VisualizationProps {
  result: FlowResult
  onNext: () => void
}

export default function Visualization({ result, onNext }: VisualizationProps) {
  const [showPoint, setShowPoint] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowPoint(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const options: ChartOptions<'scatter'> = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Skill Level →',
          color: '#e0e7ff',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          color: '#c7d2fe',
          stepSize: 20
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      y: {
        type: 'linear',
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Challenge Level →',
          color: '#e0e7ff',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          color: '#c7d2fe',
          stepSize: 20
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#e0e7ff',
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        displayColors: false
      }
    }
  }

  const flowChannelData = Array.from({ length: 11 }, (_, i) => ({
    x: i * 10,
    y: i * 10
  }))

  const data = {
    datasets: [
      {
        label: 'Flow Channel',
        data: flowChannelData,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        pointRadius: 0,
        showLine: true,
        fill: false,
        tension: 0
      },
      {
        label: 'Your Position',
        data: showPoint ? [{ x: result.skill, y: result.challenge }] : [],
        backgroundColor: getZoneColor(result.zone),
        borderColor: '#fff',
        borderWidth: 3,
        pointRadius: 12,
        pointHoverRadius: 15
      }
    ]
  }

  return (
    <div className="max-w-4xl mx-auto text-white w-full">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
          Your Flow Map
        </h2>

        <div className="bg-white/5 rounded-2xl p-6 mb-6">
          <Scatter options={options} data={data} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-500/20 rounded-xl p-4 text-center">
            <div className="text-sm text-blue-200 mb-1">Skill Level</div>
            <div className="text-3xl font-bold">{result.skill}</div>
          </div>
          <div className="bg-purple-500/20 rounded-xl p-4 text-center">
            <div className="text-sm text-purple-200 mb-1">Challenge Level</div>
            <div className="text-3xl font-bold">{result.challenge}</div>
          </div>
          <div className="bg-green-500/20 rounded-xl p-4 text-center">
            <div className="text-sm text-green-200 mb-1">Flow Score</div>
            <div className="text-3xl font-bold">{result.flowScore}</div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          View Insights
        </button>
      </div>
    </div>
  )
}

