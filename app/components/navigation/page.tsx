"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NavigationPage() {
    return (
        <div className="max-w-3xl px-10 pt-16 pb-20">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4">Navegação</h1>
                <p className="text-muted-foreground">Componentes para orientar o usuário pela aplicação.</p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Breadcrumb</h2>
                    <div className="p-6 bg-muted rounded-lg">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/components">Componentes</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Navegação</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Tabs</h2>
                    <div className="p-6 bg-muted rounded-lg">
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account" className="p-4 bg-background rounded-md mt-2 border">
                                Conteúdo da aba Account
                            </TabsContent>
                            <TabsContent value="password" className="p-4 bg-background rounded-md mt-2 border">
                                Conteúdo da aba Password
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </div>
        </div>
    )
}
