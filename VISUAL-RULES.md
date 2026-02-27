# REGLAS VISUALES — davidwebsite

## Estética del sitio
El sitio es una revista editorial personal, inspirada en The New Yorker, The Atlantic y Monocle.

El tono visual es:
- **Tipografía como protagonista**: serif grande para títulos, sans-serif para cuerpo.
  La tipo hace el trabajo pesado, no las imágenes.
- **Paleta restringida**: Papel & Tinta Roja (crema #F5F0E8, negro tinta #1A1A1A,
  rojo terracota). Sin colores saturados, sin gradientes decorativos, sin sombras.
- **Fotografía documental**: cuando hay fotos, se ven como fotoperiodismo o lifestyle
  editorial — no como stock corporativo ni selfies. Movimiento, luz natural, momentos reales.
- **Ilustración con personalidad**: las Transhumans aportan un contrapunto punk/artístico
  a la sobriedad tipográfica. Son viñetas editoriales con carácter, como los dibujos entre
  artículos de The New Yorker — no son decoración ni relleno.
- **Espacio negativo generoso**: el crema respira. No hay horror vacui.
  Una sección vacía bien tipografiada se ve mejor que una sección llena de clipart.
- **Nada brilla innecesariamente**: sin hover effects llamativos, sin animaciones excesivas,
  sin bordes redondeados grandes. Todo es plano, limpio, serio pero con humor sutil.

## Principio general
El sitio se ve como: fotografía (real o stock editorial) + tipografía + ilustraciones Transhumans como viñetas.
NO se mezclan ilustraciones cartoon con fotografía. Nunca.

## Principio de consistencia por sección
Cada sección o grupo de componentes debe ser visualmente homogéneo:
- Si usa **fotografía real** → todo en esa sección es fotografía real
- Si usa **ilustraciones Transhumans** → todo en esa sección es Transhumans
- NUNCA mezclar fotos reales con ilustraciones en el mismo contexto visual (mismo grid, mismo carrusel, misma sección)

## Jerarquía de assets visuales para cards y contenido
1. **Fotografía real propia** — Siempre preferida
2. **Fotografía de stock editorial** — Permitida cuando no hay foto propia. Requisitos: luz natural, sin poses, estética documental. Fuente: Unsplash (`images.unsplash.com`).
3. **Ilustración Transhumans** — Para separadores y secciones editoriales
4. **Placeholder tipográfico** — Último recurso, debe verse intencional (no como imagen rota)

## Ilustraciones: dónde sí y dónde no

### Permitidas: Transhumans (PREEMINENCIA)
- Librería: `transhumans art/`
- 38 ilustraciones estilo abstracto/artístico, tinta con personalidad punk/editorial
- Tienen PREEMINENCIA sobre cualquier otra librería de ilustración del sitio
- Pueden usarse en: separadores editoriales, portadas de sección, backgrounds con texto
- Cómo usarlas correctamente:
  - Como viñeta editorial entre secciones (entre dos líneas finas, centrada)
  - Renderizadas con `filter: invert(1)` (son blancas sobre transparente → se invierten a tinta sobre crema)
  - A ~85% de opacidad sobre fondo crema
  - Tamaño moderado: h-24 a h-40, nunca full-bleed
  - Funcionan mejor como pausa visual entre bloques de contenido
  - NO como fondo de card individual ni como hero image
- La regla clave: NO mezclar Transhumans con fotografía real en el mismo contexto visual

### Prohibidas en todo el sitio
- **Flat Assets / Open Peeps**: Personajes cartoon estilo "peep". NO usar en ningún lugar.
- **lukasz_adam_illustrations**: Ilustraciones flat de chef, cámara, café, robot, etc. NO usar.
- **Highlights-by-Outdraw-Design**: Flechas, subrayados, garabatos. Evitar. Solo como micro-acentos tipográficos casi invisibles (nunca como elemento protagonista ni como flechas de navegación).

### Sobre flechas y elementos decorativos
Si el diseño usa flechas dibujadas (de Highlights o cualquier otra librería), reemplazar por:
- Caracteres unicode: `→`, `←`, `↗`
- O SVG inline mínimos (una línea + punta, sin garabatos)

## Anti-patterns (errores a evitar)
- Card con ilustración cartoon como background → parece landing page de startup
- Mezclar foto real + ilustración en el mismo grid → parece collage accidental
- Ilustración gigante como hero → compite con la tipografía
- Placeholder que parece "roto" (rectángulo negro vacío sin intención) → siempre debe verse intencional
- Flechas/garabatos hand-drawn como navegación → rompen la sobriedad editorial
- SVGs generados por código simulando ilustraciones → siempre se ven feos

## Placeholders

### Para ventures/cards sin foto:
```tsx
<div className="relative w-full h-full bg-ink">
  <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
    }}
  />
</div>
```

### Para portadas de libros sin imagen:
```tsx
<div className="relative aspect-[3/4] bg-ink rounded-sm overflow-hidden flex items-end p-4">
  <span className="font-serif text-paper/60 text-sm leading-tight">
    {book.title}
  </span>
</div>
```

## CSS Classes

| Clase | Propósito | Se usa en |
|-------|-----------|-----------|
| `.illustration-vineta` | Transhumans SVG display (invert + opacity) | EditorialSeparator |

## Clases eliminadas

| Clase | Razón |
|-------|-------|
| `.illustration-mono` | Era para Lukasz Adam SVGs — eliminada |
| `.illustration-card` | Era para Lukasz Adam SVGs como bg de card — eliminada |
