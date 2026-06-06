import { useEffect, useState } from "react";
import API from "../services/api";

import {
 Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

import { Doughnut,Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function Analytics() {

  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const counts = analytics?.counts || {};
  const moodValues = {
  Happy: 10,
  Excited: 9,
  Grateful: 8,
  Neutral: 5,
  Confused: 4,
  Lonely: 3,
  Anxious: 2,
  Stressed: 2,
  Sad: 1,
  Angry: 0
};

const timelineData = {
  labels:
    analytics?.timeline?.map(
      item => item.date
    ) || [],

  datasets: [
    {
      label: "Mood Trend",

      data:
        analytics?.timeline?.map(
          item =>
            moodValues[item.mood] ?? 5
        ) || [],

      borderColor: "#8B5CF6",

      backgroundColor:
        "rgba(139,92,246,0.3)",

      tension: 0.4
    }
  ]
};

  useEffect(() => {

    async function loadAnalytics() {

      try {

        const user_id =
          localStorage.getItem("user_id");

        const response =
          await API.get(
            `/analytics/${user_id}`
          );

        setAnalytics(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    }

    loadAnalytics();

  }, []);

  if (loading) {
    return (
      <div className="p-8 text-white">
        Loading Analytics...
      </div>
    );
  }


const chartData = {
  labels: Object.keys(counts),

  datasets: [
    {
      data: Object.values(counts),

      backgroundColor: [
        "#22C55E",
        "#EF4444",
        "#F59E0B",
        "#3B82F6",
        "#8B5CF6",
        "#EC4899",
        "#14B8A6",
        "#F97316"
      ],

      borderWidth: 0
    }
  ]
};

  return (
    <div className="p-8 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Analytics 
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="bg-[#161B22] p-6 rounded-3xl">
          <p className="text-gray-400">
            Total Entries
          </p>

          <h2 className="text-4xl font-bold mt-2">
           {analytics.total_entries}
          </h2>
        </div>

        <div className="bg-[#161B22] p-6 rounded-3xl">
          <p className="text-gray-400">
            Unique Emotions
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {Object.keys(counts).length}
          </h2>
        </div>

        <div className="bg-[#161B22] p-6 rounded-3xl">
          <p className="text-gray-400">
            Dominant Mood
          </p>

          <h2 className="text-2xl font-bold mt-2">
       {analytics.dominant_mood}
          </h2>
        </div>

      </div>
     
       {/* Doughnut Chart */}

      <div className="bg-[#161B22] p-6 rounded-3xl mb-8">

        <h2 className="text-xl mb-4">
          Mood Distribution
        </h2>

        <div className="max-w-md">
          <Doughnut data={chartData} />
        </div>

      </div>

      <div className="bg-[#161B22] p-6 rounded-3xl mt-8">

  <h2 className="text-xl font-semibold mb-4">
    Mood Timeline 📈
  </h2>

  <div className="h-80">

    <Line
      data={timelineData}
      options={{
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            labels: {
              color: "white"
            }
          }
        },

        scales: {

          x: {
            ticks: {
              color: "white"
            },

            grid: {
              color: "#374151"
            }
          },

          y: {

            min: 0,
            max: 10,

            ticks: {
              color: "white",

              callback: function(value) {

                const moodLabels = {
                  0: "Angry",
                  1: "Sad",
                  2: "Anxious",
                  3: "Lonely",
                  4: "Confused",
                  5: "Neutral",
                  8: "Grateful",
                  9: "Excited",
                  10: "Happy"
                };

                return moodLabels[value] || "";
              }
            },

            grid: {
              color: "#374151"
            }
          }
        }
      }}
    />

  </div>

</div>

      {/* Emotion Counts */}

      <div className="grid md:grid-cols-2 gap-4">

        {Object.entries(counts).map(
          ([emotion, count]) => (

            <div
              key={emotion}
              className="bg-[#161B22] p-4 rounded-xl"
            >

              <h3 className="text-lg font-semibold">
                {emotion}
              </h3>

              <p className="text-3xl mt-2">
                {count}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}