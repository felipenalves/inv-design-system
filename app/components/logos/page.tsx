"use client"

import { Logo } from "@/components/ui/logo"

export default function LogosPage() {
    return (
        <div className="max-w-3xl px-10 pt-16 pb-20">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4">Logos</h1>
                <p className="text-muted-foreground">Logos institucionais do ecossistema.</p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Variações de Ícone</h2>
                    <div className="flex gap-8 items-center bg-muted p-6 rounded-lg">
                        <Logo variant="icon" size="sm" />
                        <Logo variant="icon" size="md" />
                        <Logo variant="icon" size="lg" />
                        <Logo variant="icon" size="xl" />
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Variações Completas</h2>
                    <div className="flex flex-col gap-6 bg-muted p-6 rounded-lg">
                        <Logo variant="full" size="sm" />
                        <Logo variant="full" size="md" />
                        <Logo variant="full" size="lg" />
                        <Logo variant="full" size="xl" />
                    </div>
                </section>
            </div>
        </div>
    )
}
