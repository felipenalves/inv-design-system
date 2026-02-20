"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"

export default function AlertsPage() {
    return (
        <div className="max-w-3xl px-10 pt-16 pb-20">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4">Alerts & Dialogs</h1>
                <p className="text-muted-foreground">Mensagens de sistema e confirmações destrutivas.</p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Alert Default</h2>
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            Você pode adicionar componentes interativos rapidamente.
                        </AlertDescription>
                    </Alert>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Alert Destructive</h2>
                    <Alert variant="destructive">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Sua sessão expirou. Por favor faça o login novamente.
                        </AlertDescription>
                    </Alert>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b pb-2">Alert Dialog</h2>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">Deletar Conta</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Esta ação não pode ser desfeita. Isso irá excluir permanentemente sua conta
                                    e remover seus dados de nossos servidores.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Continuar</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </section>
            </div>
        </div>
    )
}
