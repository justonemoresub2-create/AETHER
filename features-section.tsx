export default function FeaturesSection() {
  const features = [
    {
      icon: '🧠',
      title: 'Neural Pattern Recognition',
      description: 'AETHER analyzes and replicates how different AI models think and reason'
    },
    {
      icon: '⚡',
      title: 'Real-Time Analysis',
      description: 'Instant response generation showing distinct reasoning patterns'
    },
    {
      icon: '🎯',
      title: 'Side-by-Side Comparison',
      description: 'Compare how different AI personas approach the same problem'
    },
    {
      icon: '🔬',
      title: 'Reasoning Transparency',
      description: 'Understand the "why" behind each AI response style'
    },
    {
      icon: '🌐',
      title: 'Universal Interface',
      description: 'Ask anything and discover multiple perspectives instantly'
    },
    {
      icon: '🚀',
      title: 'Future-Ready',
      description: 'Extensible architecture ready for new AI models and personas'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Built for understanding how AI thinks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 hover:bg-background/80 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col gap-4 md:gap-0 md:flex-row items-center gap-4">
            <p className="text-foreground/70">Ready to explore how AI thinks?</p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all font-semibold">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
