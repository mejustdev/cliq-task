export default function Layout({children}) {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <main className="mt-48 space-y-14 divide-y">{children}</main>
      </div>
    </>
  )
}
