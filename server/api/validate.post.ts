import Anthropic from "@anthropic-ai/sdk"

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const secretKey = config.KEY

  const anthropic = new Anthropic({
    apiKey: secretKey
  });

  const body = await readBody<{
    message: string
  }>(event)

  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: body.message
      }
    ]
  });
  console.log(msg);

  return {
    ok: true,
  }
})