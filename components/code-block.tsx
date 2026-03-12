import * as React from "react"
import { codeToHtml } from "shiki"

async function CodeBlock({
  code,
  lang,
}: {
  code: string
  lang?: string
}) {
  const html = await codeToHtml(code, {
    lang: lang ?? "txt",
    theme: "github-dark",
  })

  return (
    <div
      className="not-prose overflow-hidden rounded-xl border bg-muted/30 [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:p-4 [&_code]:font-mono [&_code]:text-[13px]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export { CodeBlock }
