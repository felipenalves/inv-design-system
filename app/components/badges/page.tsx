"use client"

import { Badge } from "@/components/ui/badge"

export default function BadgesPage() {
    return (
        <div className="max-w-3xl px-10 pt-16 pb-20">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4">Badges</h1>
                <p className="text-muted-foreground">Pequenos rótulos para indicar status, tags ou classificações.</p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Variações Padrão</h2>
                    <div className="flex gap-4 p-6 bg-muted rounded-lg">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">INV Accents (Custom Colors)</h2>
                    <div className="flex gap-4 p-6 bg-muted rounded-lg flex-wrap">
                        <Badge className="bg-inv-green/10 text-inv-green border-inv-green/20 border font-mono">
                            Sucesso
                        </Badge>
                        <Badge className="bg-inv-warning/10 text-inv-warning border-inv-warning/20 border font-mono">
                            Atenção
                        </Badge>
                        <Badge className="bg-inv-error/10 text-inv-error border-inv-error/20 border font-mono">
                            Erro
                        </Badge>
                        <Badge className="bg-inv-blue/10 text-inv-blue border-inv-blue/20 border font-mono">
                            Info
                        </Badge>
                    </div>
                </section>
            </div>
        </div>
    )
}
