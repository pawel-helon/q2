import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"


export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable
        title="All devices"
        columns={columns}
        data={data}
      />
    </div>
  )
}
async function getData(): Promise<Payment[]> {
  const mockData: Payment[] = Array.from({ length: 100 }, (_, index) => ({
    id: `payment-${index}`,
    amount: Math.floor(Math.random() * 1000),
    status: Math.random() < 0.5 ? "pending" : "completed",
    email: `user${index}@example.com`,
  }));

  return mockData;
}
