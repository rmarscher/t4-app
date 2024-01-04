import { ParamsScreen } from 'app/features/params/screen'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Params Demo',
}

export default function Page() {
  return <ParamsScreen />
}
