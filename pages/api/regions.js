import apm from 'elastic-apm-node'


import { prisma } from '../../db'

export default async function handler(req, res) {

  const span = apm.startSpan('call DB')

    const regions = await prisma.regions.findMany({
        include: {
          airports: true, // Return all fields
        },
      })
    res.status(200).json(regions)

    if (span) span.end()

}
