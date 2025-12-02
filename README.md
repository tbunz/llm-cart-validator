https://llm-cart-validator.vercel.app/

# LLM E-commerce Deal Evaluation Prototype

**What if promotional deals didn't need a rule engine?**

Using Claude to evaluate e-commerce promotional deals, instead of a rule system.

## Background

At a previous company, I worked on an e-commerce platform with a custom-built deals evaluation engine in the checkout. Given a customer cart with product info, logic rules to qualify for a promotional deal, and discount to be applied- it calculated the cost of the cart.

It was really difficult to maintain and extend.

This is a complicated system to code from scratch. Consider the parameters in a promotional deal:
- Quantities
- Brands
- Logic conditions (e.g. If you purchase A and B; If you purchase A or B and C; If you purchase 2 of any A or B or C)
- Total cost
- Cost of subset of items (e.g. If cost of category A items in cart exceeds 10, discount 5 to those items). 
- Exclusions
- Stacking/non-stacking deals

## The Insight
**This is not a difficult problem for a human to solve.**

Given a list of products, and the natural language description of how a deal works, humans can easily evaluate if a customer cart satisfies the criteria of a deal, and how much discount should be applied.

Enter Claude.

## What This Does

This prototype proves the concept: send Claude a shopping cart and a deal description like "Buy 2, get 15% off the cheaper item," and it correctly evaluates eligibility and calculates the discount.

It works well. Even with vague or ambiguous language, Claude evaluates deals with near-perfect accuracy. (This could be improved to "perfect". See "Production Considerations" below.)

## Example
```typescript
const cart = {
  items: [
    { name: "Raspberry", brand: "Berry Co.", category: "berry", price: 3, qty: 1 },
    { name: "Apple", brand: "Fruit Stand", category: "general", price: 1, qty: 1 },
    { name: "Strawberry", brand: "Berry Co.", category: "berry", price: 3, qty: 1 }
  ]
}
```

Deal: `"Get $1 off all Berry Co. and Fruit Stand items. Excludes peels or strawberries"`

Claude's response:
```json
{
  "qualifies": true,
  "discount": 2.00
}
```
*$1 off Raspberry (Berry Co., not excluded) + $1 off Apple (Fruit Stand, not excluded). Strawberry excluded by deal terms.*

## Why This Matters

**Flexibility:** Marketing teams write deals in plain English. No engineering tickets.

**Maintainability:** One prompt template vs. hundreds of rules and edge cases.

**Extensibility:** New deal types (BOGO, tiered discounts, bundles) work immediately—no code changes.

Promotional deals don't need to be translated into formal logic via a rules engine. Non-technical teams can define them in plain language, and they can still be used directly in code.

## Production Considerations

This prototype uses simple string-based prompts. A production system would add:

- **Structured output:** JSON schema validation for deterministic responses
- **Tool use:** Real-time inventory checks, price lookups, customer history
- **Prompt optimization:** Few-shot examples, chain-of-thought for complex deals
- **Fallbacks:** Confidence scoring and graceful degradation
- **Audit trails:** Logging for deal evaluation decisions

## Tech

- Nuxt 3 + TypeScript
- Anthropic Claude API
- Fake fruit data

## Disclaimers

This is a personal prototype and portfolio piece. I came up with this idea while at a previous employer, but it was never approved or put into production. All data here is fictional.

