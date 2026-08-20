import type { UpdateContent } from '../types/shared'
import gateHubWallet from '@assets/logo-wallet-gatehub.svg'

export interface Wallet {
  name: string
  image: ImageMetadata
  link: string
}

export const wallets: Wallet[] = [
  {
    name: 'GateHub',
    image: gateHubWallet,
    link: 'https://gatehub.net/?ref=webmonetization.org'
  }
]

export const updates: UpdateContent[] = []
