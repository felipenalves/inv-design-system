"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"

export default function LoadersPage() {
    return (
        <div className="max-w-3xl px-10 pt-16 pb-20">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4">Loaders</h1>
                <p className="text-muted-foreground">Indicadores de progresso e estado de carregamento.</p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Spinner (Animado SVG)</h2>
                    <div className="flex gap-8 items-center p-6 bg-muted rounded-lg">
                        <Spinner size="sm" />
                        <Spinner size="md" color="primary" />
                        <Spinner size="lg" color="secondary" />
                        <Spinner size="xl" color="muted" />
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Skeleton Loader</h2>
                    <div className="p-6 bg-muted rounded-lg">
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>

                        <div className="mt-8 space-y-3">
                            <Skeleton className="h-[200px] w-full rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-4/5" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
