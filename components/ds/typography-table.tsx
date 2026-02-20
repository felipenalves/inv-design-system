interface TypographyRow {
  name: string
  size: string
  weight: string
  font: string
  tracking: string
  lineHeight?: string
}

interface TypographyTableProps {
  rows: TypographyRow[]
}

export function TypographyTable({ rows }: TypographyTableProps) {
  return (
    <div className="border-border overflow-hidden rounded-lg border">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-border border-b">
            {['Token', 'Exemplo', 'Tamanho', 'Peso', 'Font', 'Tracking'].map((h) => (
              <th
                key={h}
                className="text-muted-foreground/60 px-3 py-2.5 font-mono text-[11px] font-medium tracking-widest uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className="border-border hover:bg-accent/50 border-b transition-colors last:border-0"
            >
              {/* Token name */}
              <td className="px-3 py-2.5">
                <code className="text-muted-foreground font-mono text-[11px]">
                  {row.name}
                </code>
              </td>
              {/* Exemplo */}
              <td className="px-3 py-2.5">
                <span
                  style={{
                    fontFamily:
                      row.font.includes('Mono') || row.font.includes('JetBrains')
                        ? 'var(--font-jetbrains-mono)'
                        : row.font === 'Lora'
                          ? 'var(--font-lora)'
                          : 'var(--font-sans)',
                    fontSize: `${Math.min(parseInt(row.size), 22)}px`,
                    fontWeight: row.weight,
                    letterSpacing: row.tracking,
                    lineHeight: 1.2,
                  }}
                  className="text-foreground"
                >
                  Aa
                </span>
              </td>
              {/* Size */}
              <td className="px-3 py-2.5">
                <span className="text-foreground font-mono text-xs">{row.size}</span>
              </td>
              {/* Weight */}
              <td className="px-3 py-2.5">
                <span className="text-muted-foreground font-mono text-xs">{row.weight}</span>
              </td>
              {/* Font */}
              <td className="px-3 py-2.5">
                <span className="text-muted-foreground font-mono text-xs">{row.font}</span>
              </td>
              {/* Tracking */}
              <td className="px-3 py-2.5">
                <span className="text-muted-foreground font-mono text-xs">{row.tracking}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
