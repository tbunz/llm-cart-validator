import type { Product } from '~/types';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Blueberry",
        brand: "Berry Co.",
        category: "berry",
        price: 2,
    },
    {
        id: 2,
        name: "Raspberry",
        brand: "Berry Co.",
        category: "berry",
        price: 3,
    },
    {
        id: 3,
        name: "Strawberry",
        brand: "Berry Co.",
        category: "berry",
        price: 3,
    },
    {
        id: 4,
        name: "Blueberry",
        brand: "Fruits LLC",
        category: "berry",
        price: 5,
    },
    {
        id: 5,
        name: "Blueberry",
        brand: "Fruit Stand",
        category: "berry",
        price: 2,
    },
    {
        id: 6,
        name: "Banana",
        brand: "Fruit Stand",
        category: "peel",
        price: 9,
    },
    {
        id: 7,
        name: "Apple",
        brand: "Fruit Stand",
        category: "general",
        price: 1,
    },
      {
        id: 8,
        name: "Orange",
        brand: "Fruit Stand",
        category: "peel",
        price: 2,
    },
      {
        id: 9,
        name: "Grape",
        brand: "Fruit Stand",
        category: "general",
        price: 2,
    },
      {
        id: 10,
        name: "Banana",
        brand: "Cheep Froots",
        category: "peel",
        price: 8,
    },
      {
        id: 11,
        name: "Orange",
        brand: "Cheep Froots",
        category: "peel",
        price: 2,
    },
]

export const DEALS = [
    "Buy 2 blueberries, get the one of lesser value free. Can only be redeemed once (no matter how many multiples of 2 blueberries the cart contains, only 1 blueberry can be free). Fruits LLC products are EXCLUDED from contributing to the blueberry count to meet the deal, AND from being the free one discounted.", 
    "Get $2 off each product (by quantity) in the category that the cart has the most spent in (peel, general, berry). If there's a tie in spent amount, take the category with the least items."
]

export const CLAUDE_SYSTEM_PROMPT = `
    You are a deal validation assistant for an e-commerce store. Your role is to assess customers carts at checkout and decide which deals the customer qualifies for (if any), and what effect that has to the cost of their cart. You will be provided text that defines the terms of the deal, and provided the structured object data which represents the customer's cart items. You will use this information to craft your response. Here are some rules to guide you:
    1. Begin with a brief explanation of your reasoning. Breakdown the basic logical parameters of the deal that you derived from the natural language description, and how the cart met, or did not meet a parameter. 
    2. After this, your will response will include the following in JSON format:
        {
            "qualifies": boolean,
            "discount": number,
        }
    where "qualifies" is a true/false denoting if they qualified for the deal and "discount" is the amount their cart is eligible for to deduct from the total. 
    3. Only use deal information and product data that you are provided in the prompt. Do not make up any deals, invent your own products, or change any details to any information you are given. 
    4. If you are given data that appears malformed (e.g. invalid data objects, incomplete deal description that cuts off mid-sentence), or anything that makes you feel as though the information given to you is invalid, ignore the previous response rules: simply respond with the text "ERROR".
    5. In general, the deals should be interpreted exactly as they are worded- however, you may refuse to evaluate a deal and respond "ERROR" if you deem a deal to be unreasonable or too vague. Some examples might be: a deal that makes the cart cost go negative; a deal that appears to contain unfinished text (cuts off mid-sentence); a deal that contains logical contradictions, such as "the cart must be over $15 total, but must be less than $15 total to qualify". 
`