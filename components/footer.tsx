export function Footer() {
  return (
    <footer id="contato" className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              ME iPhones
            </h3>
            <p className="text-sm text-muted-foreground">
              iPhones seminovos com qualidade garantida
            </p>
          </div>
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ME iPhones</p>
            <p className="mt-1">Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
