"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Eye, Code2, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface AdvancedCodePreviewProps {
  code: string
  title?: string
  description?: string
  preview?: React.ReactNode
  language?: string
  showLineNumbers?: boolean
}

export function AdvancedCodePreview({
  code,
  title,
  description,
  preview,
  language = "tsx",
  showLineNumbers = true,
}: AdvancedCodePreviewProps) {
  const [view, setView] = useState<"preview" | "code" | "split">("split")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeLines = code.split("\n")

  // Default preview component
  const defaultPreview = (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">This is a sample component with Tailwind styling.</p>
        <Button className="w-full">Click me!</Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-4">
        {title && <h2 className="text-2xl font-semibold mb-2">{title}</h2>}
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{language.toUpperCase()}</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind</Badge>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center border rounded-lg p-1">
                <Button
                  variant={view === "preview" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setView("preview")}
                  className="h-7 px-2"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  Preview
                </Button>
                <Button
                  variant={view === "split" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setView("split")}
                  className="h-7 px-2"
                >
                  <Maximize2 className="h-3 w-3 mr-1" />
                  Split
                </Button>
                <Button
                  variant={view === "code" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setView("code")}
                  className="h-7 px-2"
                >
                  <Code2 className="h-3 w-3 mr-1" />
                  Code
                </Button>
              </div>
              <Button variant="outline" size="sm" onClick={copyToClipboard} className="h-8 bg-transparent">
                {copied ? (
                  <>
                    <Check className="h-3 w-3 mr-1" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className={cn("grid gap-4", view === "split" ? "grid-cols-2" : "grid-cols-1")}>
            {(view === "preview" || view === "split") && (
              <div className="border rounded-lg p-6 bg-background">
                <div className="flex items-center justify-center min-h-[200px]">{preview || defaultPreview}</div>
              </div>
            )}

            {(view === "code" || view === "split") && (
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted px-4 py-2 border-b">
                  <span className="text-sm font-mono text-muted-foreground">component.{language}</span>
                </div>
                <div className="bg-muted/30 overflow-x-auto">
                  <pre className="p-4 text-sm">
                    <code className="font-mono">
                      {showLineNumbers ? (
                        codeLines.map((line, index) => (
                          <div key={index} className="flex">
                            <span className="text-muted-foreground mr-4 select-none w-8 text-right">{index + 1}</span>
                            <span className="text-foreground">{line}</span>
                          </div>
                        ))
                      ) : (
                        <span className="text-foreground">{code}</span>
                      )}
                    </code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
