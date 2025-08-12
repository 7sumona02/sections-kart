"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"

interface CodePreviewProps {
  code: string
  title?: string
  description?: string
  preview?: React.ReactNode
}

export function CodePreview({ code, title, description, preview }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Default preview component if none provided
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-4">
        {title && <h2 className="text-2xl font-medium tracking-tighter mb-2">{title}</h2>}
        {description && <p className="text-neutral-500">{description}</p>}
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Tailwind</Badge>
          </div>
        </div>

        <TabsContent value="preview" className="mt-0">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-center min-h-[200px]">{preview || defaultPreview}</div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-0">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
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
            </CardHeader>
            <CardContent className="pt-0">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code className="font-mono text-foreground">{code}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
