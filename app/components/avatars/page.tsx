"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AvatarGroup } from "@/components/ui/avatar-group"

export default function AvatarsPage() {
    return (
        <div className="max-w-3xl px-10 pt-16 pb-20">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4">Avatares</h1>
                <p className="text-muted-foreground">Representação visual de usuários e entidades.</p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Avatar Simples</h2>
                    <div className="flex gap-4 p-6 bg-muted rounded-lg">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarFallback>FA</AvatarFallback>
                        </Avatar>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Grupo de Avatares (AvatarGroup)</h2>
                    <div className="p-6 bg-muted rounded-lg flex flex-col gap-6">
                        <div>
                            <h3 className="text-sm font-medium mb-3">Sem limite (Todos visíveis)</h3>
                            <AvatarGroup>
                                <Avatar><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
                                <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
                                <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
                            </AvatarGroup>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-3">Com limite de 3 (+ contador extra)</h3>
                            <AvatarGroup max={3}>
                                <Avatar><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
                                <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
                                <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
                                <Avatar><AvatarFallback>EF</AvatarFallback></Avatar>
                                <Avatar><AvatarFallback>GH</AvatarFallback></Avatar>
                            </AvatarGroup>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
