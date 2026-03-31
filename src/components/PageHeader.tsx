interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const bgImage = 'https://picsum.photos/seed/amygym/1400/500'

  return (
    <div
      className="relative bg-purple-800 py-20 md:py-28 px-4 text-white text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-purple-900/75" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-purple-200 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
