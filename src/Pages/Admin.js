import { useEffect, useState } from "react";

export default function AdminPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching feedback:", error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Feedback Page</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Feedback</th>
              <th className="p-2 border">Contact</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((item) => (
              <tr key={item.id} className="border hover:bg-gray-200">
                <td className="p-2 border text-center">{item.id}</td>
                <td className="p-2 border">{item.category}</td>
                <td className="p-2 border">{item.feedback}</td>
                <td className="p-2 border">{item.contact || "N/A"}</td>
                <td className="p-2 border">{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}