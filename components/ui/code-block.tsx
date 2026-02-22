"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// ── Tokenizer ──────────────────────────────────────────────────────
type TokenType = "tag-bracket" | "tag-name" | "attr-name" | "attr-value" | "text"

interface Token {
  type: TokenType
  value: string
}

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = []
  let i = 0

  while (i < line.length) {
    if (line[i] === "<") {
      // Closing tag </
      if (line[i + 1] === "/") {
        tokens.push({ type: "tag-bracket", value: "</" })
        i += 2
        let name = ""
        while (i < line.length && /[a-zA-Z0-9.]/.test(line[i])) name += line[i++]
        if (name) tokens.push({ type: "tag-name", value: name })
        if (line[i] === ">") { tokens.push({ type: "tag-bracket", value: ">" }); i++ }
      } else {
        // Opening tag
        tokens.push({ type: "tag-bracket", value: "<" })
        i++
        let name = ""
        while (i < line.length && /[a-zA-Z0-9.]/.test(line[i])) name += line[i++]
        if (name) tokens.push({ type: "tag-name", value: name })

        // Attributes until > or />
        while (i < line.length && !(line[i] === ">" || (line[i] === "/" && line[i + 1] === ">"))) {
          if (/\s/.test(line[i])) {
            tokens.push({ type: "text", value: line[i++] })
          } else if (/[a-zA-Z_-]/.test(line[i])) {
            let attr = ""
            while (i < line.length && /[a-zA-Z0-9_-]/.test(line[i])) attr += line[i++]
            tokens.push({ type: "attr-name", value: attr })
          } else if (line[i] === "=") {
            tokens.push({ type: "text", value: "=" })
            i++
            if (line[i] === '"') {
              let val = '"'
              i++
              while (i < line.length && line[i] !== '"') val += line[i++]
              val += '"'; i++
              tokens.push({ type: "attr-value", value: val })
            } else if (line[i] === "{") {
              let val = "{"
              let depth = 1; i++
              while (i < line.length && depth > 0) {
                if (line[i] === "{") depth++
                if (line[i] === "}") depth--
                val += line[i++]
              }
              tokens.push({ type: "attr-value", value: val })
            }
          } else {
            tokens.push({ type: "text", value: line[i++] })
          }
        }

        if (line[i] === "/" && line[i + 1] === ">") {
          tokens.push({ type: "tag-bracket", value: "/>" }); i += 2
        } else if (line[i] === ">") {
          tokens.push({ type: "tag-bracket", value: ">" }); i++
        }
      }
    } else {
      // Plain text / content
      let text = ""
      while (i < line.length && line[i] !== "<") text += line[i++]
      if (text) tokens.push({ type: "text", value: text })
    }
  }

  return tokens
}

// ── Colors ─────────────────────────────────────────────────────────
const tokenColors: Record<TokenType, string> = {
  "tag-bracket": "#7dcfff",
  "tag-name":    "#7dcfff",
  "attr-name":   "#a5d6ff",
  "attr-value":  "#f47067",
  "text":        "#e6edf3",
}

// ── Component ──────────────────────────────────────────────────────
interface CodeBlockProps {
  code: string
  className?: string
}

function CodeBlock({ code, className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const lines = code.split("\n")
  // Strip trailing empty line if present
  const trimmed = lines[lines.length - 1].trim() === "" ? lines.slice(0, -1) : lines

  function handleCopy() {
    navigator.clipboard.writeText(code.trimEnd()).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden font-mono text-sm",
        className
      )}
      style={{ background: "#161b22" }}
    >
      {/* Copy button */}
      <button
        onClick={handleCopy}
        aria-label="Copiar código"
        className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-md transition-colors"
        style={{ color: copied ? "#7dcfff" : "#7d8590", background: "transparent" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#21262d")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>

      {/* Lines */}
      <div className="overflow-x-auto py-4">
        <table className="w-full border-collapse">
          <tbody>
            {trimmed.map((line, idx) => (
              <tr key={idx} className="group">
                {/* Line number */}
                <td
                  className="select-none pl-4 pr-5 text-right align-top w-px whitespace-nowrap"
                  style={{ color: "#484f58", minWidth: "3rem", paddingTop: "1px", paddingBottom: "1px" }}
                >
                  {idx + 1}
                </td>
                {/* Code */}
                <td
                  className="pr-12 align-top whitespace-pre"
                  style={{ color: "#e6edf3", paddingTop: "1px", paddingBottom: "1px" }}
                >
                  {line === "" ? (
                    <span>&nbsp;</span>
                  ) : (
                    tokenizeLine(line).map((token, t) => (
                      <span key={t} style={{ color: tokenColors[token.type] }}>
                        {token.value}
                      </span>
                    ))
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Icons ──────────────────────────────────────────────────────────
function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

CodeBlock.displayName = "CodeBlock"

export { CodeBlock }
export type { CodeBlockProps }
