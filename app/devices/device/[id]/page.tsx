interface DevicePageProps {
    params: {
        id: number
    }
}

const DevicePage = ({ params }: DevicePageProps) => {
  return (
    <div>{params.id}</div>
  )
}

export default DevicePage