import { fetchDevice } from "@/app/api/neon/find-device"

interface DevicePageProps {
    params: {
        id: number
    }
}

async function DevicePage({ params }: DevicePageProps) {
  const id = Number(params.id)

  const device = await fetchDevice(id)

  console.log(device)  
  return (
    <div>
      <h1>{device?.deviceName}</h1>
    </div>
  )
}

export default DevicePage