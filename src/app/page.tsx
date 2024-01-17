import Landing from '@/components/Landing'
import FeaturesAndBenefits from '@/components/FeaturesAndBenefits'
import Image from 'next/image'
import ColorPalette from '@/components/ColorPalette'
import Clients from '@/components/Clients'

export default function Home() {
  return (
    <>
      <Landing />
      <Clients />
      <FeaturesAndBenefits />
      <ColorPalette />
    </>
  )
}
