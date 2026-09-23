const topNavigation = ["Projects", "Models", "Reports", "Settings"];

const workspaceTools = [
  "Inspect",
  "Measure",
  "Defects",
  "DICOM",
  "Calculators",
  "Data",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-engivue-background text-engivue-text">
      <header className="border-b border-engivue-copper bg-engivue-surface">
        <div className="flex min-h-18 items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <div className="border-r border-engivue-copper pr-8 text-3xl font-bold tracking-tight">
              <span className="text-engivue-copper">Engi</span>
              <span>Vue</span>
            </div>

            <p className="text-lg font-medium">Workbench</p>

            <nav className="hidden items-center gap-6 lg:flex">
              {topNavigation.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="text-sm text-engivue-text-muted transition-colors hover:text-engivue-copper"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="hidden border-r border-engivue-border pr-4 text-right sm:block">
              <p className="text-engivue-text-muted">Operator</p>
              <p className="font-medium">Swasthik</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-engivue-copper text-sm font-semibold text-engivue-copper">
              S
            </div>
          </div>
        </div>
      </header>

      <div className="grid min-h-[calc(100vh-73px)] grid-cols-1 xl:grid-cols-[190px_minmax(0,1fr)_320px]">
        <aside className="border-b border-engivue-border bg-engivue-surface p-3 xl:border-r xl:border-b-0">
          <p className="mb-3 px-3 pt-2 text-xs font-semibold tracking-wider text-engivue-text-muted">
            WORKBENCH TOOLS
          </p>

          <nav className="space-y-1">
            {workspaceTools.map((tool) => {
              const isActive = tool === "Inspect";

              return (
                <button
                  key={tool}
                  type="button"
                  className={`block w-full rounded-md px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-engivue-copper text-engivue-background"
                      : "text-engivue-text-muted hover:bg-engivue-surface-elevated hover:text-engivue-text"
                  }`}
                >
                  {tool}
                </button>
              );
            })}
          </nav>

          <div className="mt-12 hidden px-3 xl:block">
            <p className="text-xs leading-6 tracking-[0.25em] text-engivue-text-muted">
              SEE
              <br />
              MEASURE
              <br />
              SOLVE
              <br />
              FURTHER
            </p>
          </div>
        </aside>

        <section className="min-w-0 p-4 sm:p-6">
          <div className="overflow-hidden rounded-lg border border-engivue-border bg-engivue-surface">
            <div className="flex items-center justify-between border-b border-engivue-border px-4 py-3 text-sm">
              <p className="truncate text-engivue-text-muted">
                Projects <span className="mx-2 text-engivue-copper">›</span>
                New inspection
              </p>

              <div className="flex gap-2 text-engivue-text-muted">
                <button
                  type="button"
                  className="rounded border border-engivue-border px-3 py-1 text-xs hover:border-engivue-copper"
                >
                  100%
                </button>
                <button
                  type="button"
                  className="rounded border border-engivue-border px-3 py-1 text-xs hover:border-engivue-copper"
                >
                  Fullscreen
                </button>
              </div>
            </div>

            <div className="flex min-h-[480px] items-center justify-center bg-[#090b0c] p-6">
              <div className="max-w-md text-center">
                <p className="mb-2 text-xl font-semibold">Start an inspection</p>
                <p className="mb-6 text-sm leading-6 text-engivue-text-muted">
                  Upload an industrial image to measure dimensions, identify
                  defects, and generate inspection results.
                </p>

                <button
                  type="button"
                  className="rounded-md bg-engivue-copper px-5 py-3 text-sm font-semibold text-engivue-background transition-colors hover:bg-engivue-copper-hover"
                >
                  Upload Image
                </button>

                <p className="mt-4 text-xs text-engivue-text-muted">
                  PNG, JPG, BMP and TIFF supported
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="border-t border-engivue-border bg-engivue-surface p-4 xl:border-t-0 xl:border-l">
          <h2 className="mb-6 text-lg font-semibold">Inspection Parameters</h2>

          <label className="mb-5 block text-sm">
            <span className="mb-2 block text-engivue-text-muted">
              Detection Threshold
            </span>
            <input
              className="w-full rounded-md border border-engivue-border bg-engivue-background px-3 py-2 text-sm outline-none focus:border-engivue-copper"
              defaultValue="0.65"
              type="number"
            />
          </label>

          <label className="mb-5 block text-sm">
            <span className="mb-2 block text-engivue-text-muted">
              Inspection Mode
            </span>
            <select className="w-full rounded-md border border-engivue-border bg-engivue-background px-3 py-2 text-sm outline-none focus:border-engivue-copper">
              <option>Surface inspection</option>
              <option>Dimensional measurement</option>
              <option>Defect detection</option>
            </select>
          </label>

          <div className="mt-8 border-t border-engivue-border pt-5">
            <p className="mb-2 text-xs font-semibold tracking-wider text-engivue-text-muted">
              INSPECTION STATUS
            </p>
            <p className="text-sm">Waiting for image</p>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-md bg-engivue-copper px-4 py-3 text-sm font-semibold text-engivue-background transition-colors hover:bg-engivue-copper-hover"
          >
            Run Workflow
          </button>

          <button
            type="button"
            className="mt-3 w-full rounded-md border border-engivue-copper px-4 py-3 text-sm font-medium text-engivue-copper transition-colors hover:bg-engivue-copper-dark hover:text-engivue-text"
          >
            Reset
          </button>
        </aside>
      </div>
    </main>
  );
}