import { fetchDevice } from "@/app/api/neon/find-device"
import { auth } from "@clerk/nextjs/server"

interface DevicePageProps {
    params: {
        id: number
    }
}

async function DevicePage({ params }: DevicePageProps) {
  const role = auth().orgRole
  
  const id = Number(params.id)
  const device = await fetchDevice(id)

  return (
    <div>
      <h1>{device?.deviceName}</h1>
    </div>
  )
}

export default DevicePage