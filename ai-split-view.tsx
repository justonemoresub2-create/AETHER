'use client';

import { AIPersona, getPersonaConfig } from '@/lib/ai-simulation';

interface AISplitViewProps {
  responses: Record<AIPersona, string>;
  selectedPersonas: AIPersona[];
}

export default function AISplitView({ responses, selectedPersonas }: AISplitViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-fade-in">
      {selectedPersonas.map((personaId) => {
        const config = getPersonaConfig(personaId);
        const response = responses[personaId];

        return (
          <div
            key={personaId}
            className="relative border border-border rounded-xl overflow-hidden bg-gradient-to-b from-card/50 to-background/50 hover:border-primary/50 transition-all"
          >
            {/* Header */}
            <div
              className="px-6 py-4 border-b border-border flex items-center gap-3"
              style={{ backgroundColor: `${config.color}15` }}
            >
              <span className="text-2xl">{config.icon}</span>
              <div>
                <h3 className="font-bold text-lg">{config.name}</h3>
                <p className="text-xs text-foreground/60">{config.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="prose prose-invert max-w-none text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">
                {response}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-border bg-background/50 flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-primary/40"
                    style={{
                      animation: `pulse 2s ease-in-out ${i * 0.2}s infinite`
                    }}
                  />
                ))}
              </div>
              <button className="text-xs text-primary/70 hover:text-primary transition-colors">
                Copy
              </button>
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
