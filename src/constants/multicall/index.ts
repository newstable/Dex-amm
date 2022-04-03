import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xD0A36F40a2308100B2B12B67B7E1e333ef5b0CAF', // TODO
  [ChainId.TESTNET]: '0xD0A36F40a2308100B2B12B67B7E1e333ef5b0CAF'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
