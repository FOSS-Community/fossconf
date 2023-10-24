// app/api/tickets.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { CandyPay } from '@candypay/checkout-sdk';

const sdk = new CandyPay({
  api_keys: {
    private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
    public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY!,
  },
  network: 'mainnet',
  config: {
    collect_shipping_address: false,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request Method:', req.method);
  console.log('Request Headers:', JSON.stringify(req.headers));
  console.log('Request Body:', JSON.stringify(req.body));

  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    console.log('Creating session with CandyPay...');
    const response = await sdk.session.create({
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      tokens: ['dust', 'samo'],
      items: [
        {
          name: "FOSSCU Conference Ticket",
          price: 12,
          quantity: 1,
          image: ,
        },
      ],
    });

    console.log('CandyPay Session Response:', JSON.stringify(response));

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error creating session' });
  }
}
