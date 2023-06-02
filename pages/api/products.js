// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://raw.githubusercontent.com/DanielQuilcue/E-Commerce-JeanGenius/main/public/data/products.json');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}

