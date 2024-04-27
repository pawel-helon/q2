import { fetchDevice } from "@/app/api/neon/find-device"
import { auth } from "@clerk/nextjs/server"
import { Navbar } from "./_components/navbar"

interface DevicePageProps {
    params: {
        id: number
    }
}

async function DevicePage({ params }: DevicePageProps) {
  const role = auth().orgRole
  
  const id = Number(params.id)
  
  const device = await fetchDevice(id)
  const deviceName = device?.deviceName
  const state = device?.state

  // console.log(device)
  
  return (
    <div>
      <Navbar deviceName={deviceName} state={state}/>
      {/* <Header /> */}
      {/* <TabsQ /> */}
    </div>
  )
}

export default DevicePage