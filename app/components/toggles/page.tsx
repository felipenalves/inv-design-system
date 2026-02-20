"use client"

import { Switch } from "@/components/ui/switch"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

export default function TogglesPage() {
    return (
        <div className="max-w-3xl px-10 pt-16 pb-20">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4">Toggles & Switches</h1>
                <p className="text-muted-foreground">Controles alternáveis para opções binárias ou múltiplas escolhas.</p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Switch</h2>
                    <div className="flex items-center space-x-2 p-6 bg-muted rounded-lg">
                        <Switch id="airplane-mode" />
                        <label htmlFor="airplane-mode" className="text-sm font-medium leading-none">
                            Airplane Mode
                        </label>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Toggle Único</h2>
                    <div className="flex gap-4 items-center p-6 bg-muted rounded-lg">
                        <Toggle aria-label="Toggle bold">
                            <Bold className="h-4 w-4" />
                        </Toggle>
                        <Toggle variant="outline" aria-label="Toggle italic">
                            <Italic className="h-4 w-4 hover:text-inv-blue" />
                        </Toggle>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Toggle Group</h2>
                    <div className="p-6 bg-muted rounded-lg flex flex-col gap-6">
                        <div>
                            <h3 className="text-sm font-medium mb-3">Múltipla Seleção (type="multiple")</h3>
                            <ToggleGroup type="multiple">
                                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                                    <Bold className="h-4 w-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                                    <Italic className="h-4 w-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                                    <Underline className="h-4 w-4" />
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
