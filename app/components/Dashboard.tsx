"use client";

import { useEffect, useState } from "react";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

type ApiData = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function Dashboard() {
  const [data, setData] = useState<ApiData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <ScatterChart
      height={300}
      series={[
        {
          label: "Registro de postagem",
          data: data.map((v) => ({
            x: v.id,
            y: v.userId,
            id: v.id,
          })),
        },
      ]}
    />
  );
}
