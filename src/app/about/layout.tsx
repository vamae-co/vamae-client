import CSS from 'csstype'

export default function AboutUsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const layoutStyle: CSS.Properties = {
        background: "#D1D1DB"
    };
    return (
      <section style={layoutStyle}>
        {children}
      </section>
    )
  }