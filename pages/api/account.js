import { account } from 'react-storefront-connector'

export default async function (req, res) {
  res.json(await account(req, res))
}
