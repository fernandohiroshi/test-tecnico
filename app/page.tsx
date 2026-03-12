import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/code-block";
import { candidate, questionnaire } from "@/lib/questionnaire";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:ring-1 focus:ring-ring"
      >
        Pular para conteúdo
      </a>

      <div id="top" />
      <SiteHeader />

      <main id="conteudo" className="mx-auto w-full max-w-5xl px-4">
        <section className="relative py-14 sm:py-20">
          <div className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(60%_60%_at_50%_0%,oklch(0.97_0_0)_0%,transparent_70%)] dark:[background:radial-gradient(60%_60%_at_50%_0%,oklch(0.25_0_0)_0%,transparent_70%)]" />

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
              <Badge variant="secondary">SEO-ready</Badge>
            </div>

            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Minhas respostas para o teste técnico
            </h1>
            <p className="max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
              Avaliação Técnica — Teste Lógica de Programação
              <br />
              Vaga/Setor: Desenvolvedor de Sistema
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="#questionario">Ver respostas</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="/Teste-DSIN-Dev.pdf" download>
                  Baixar PDF
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#perfil">Ver perfil</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="perfil" className="scroll-mt-20 py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Perfil</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Dados iniciais do candidato
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{candidate.name}</CardTitle>
                <CardDescription>
                  Início: {candidate.startTime} • Data: {candidate.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {candidate.interest.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resumo</CardTitle>
                <CardDescription>
                  Experiência e stack de maior afinidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  React.js, Next.js, TypeScript, integrações REST, performance e
                  SEO.
                </div>
                <Separator />
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experiencias" className="scroll-mt-20 py-10">
          <h2 className="text-xl font-semibold tracking-tight">Experiências</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Principais áreas declaradas
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {candidate.experiences.map((exp) => (
              <Card key={exp.id}>
                <CardHeader>
                  <CardTitle>
                    {exp.id} — {exp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="questionario" className="scroll-mt-20 py-10">
          <h2 className="text-xl font-semibold tracking-tight">
            Respostas do questionário
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Algoritmos formatados e destacados para leitura.
          </p>

          <div className="mt-6 grid gap-4">
            {questionnaire.map((entry) => (
              <Card key={entry.id}>
                <CardHeader>
                  <CardTitle>{entry.title}</CardTitle>
                  {entry.code && entry.summary ? (
                    <CardDescription>{entry.summary}</CardDescription>
                  ) : null}
                </CardHeader>
                {entry.code ? (
                  <CardContent className="space-y-3">
                    <CodeBlock code={entry.code} lang={entry.language} />
                  </CardContent>
                ) : (
                  <CardContent>
                    <p className="text-sm whitespace-pre-line text-muted-foreground">
                      {entry.summary ?? "Sem conteúdo de código para exibir."}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 py-10">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Informações</CardTitle>
                <CardDescription>Contato e links</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <div className="text-muted-foreground">Local</div>
                  <div>Foz do Iguaçu, Paraná, Brasil</div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div>
                    <div className="text-muted-foreground">Email</div>
                    <Link
                      className="underline underline-offset-4"
                      href="mailto:contatofernandohiroshitakeda@gmail.com"
                    >
                      contatofernandohiroshitakeda@gmail.com
                    </Link>
                  </div>
                  <div>
                    <div className="text-muted-foreground">WhatsApp</div>
                    <Link
                      className="underline underline-offset-4"
                      href="https://wa.me/5545988311915"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +55 45 98831-1915
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links</CardTitle>
                <CardDescription>Portfolio e redes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>
                  <Link
                    className="underline underline-offset-4"
                    href="https://fernandohiroshi.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio — fernandohiroshi.com
                  </Link>
                </div>
                <div>
                  <Link
                    className="underline underline-offset-4"
                    href="https://github.com/fernandohiroshi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub — github.com/fernandohiroshi
                  </Link>
                </div>
                <div>
                  <Link
                    className="underline underline-offset-4"
                    href="https://www.linkedin.com/in/fernando-hiroshi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn — linkedin.com/in/fernando-hiroshi
                  </Link>
                </div>
                <Separator className="my-2" />
                <div>
                  <Link
                    className="underline underline-offset-4"
                    href="https://www.konbinicode.com/pt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website — konbinicode.com/pt
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Button asChild variant="outline">
              <Link href="#top">Voltar ao topo</Link>
            </Button>
            <Button asChild>
              <Link href="#questionario">Explorar código</Link>
            </Button>
          </div>
        </section>

        <footer className="py-10">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div>Template demo com Next.js + Tailwind + shadcn/ui</div>
            <div className="flex items-center gap-2">
              <Link className="underline underline-offset-4" href="#perfil">
                Perfil
              </Link>
              <span aria-hidden="true">•</span>
              <Link
                className="underline underline-offset-4"
                href="#questionario"
              >
                Questionário
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
