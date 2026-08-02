/**
 * Intrinsic pixel dimensions for every photograph in `public/media/`.
 *
 * GENERATED — do not hand-edit. Regenerate after adding or replacing a photo.
 *
 * These exist so every <img> can carry width and height attributes. Without
 * them the browser reserves no space until a photo decodes, which collapses the
 * layout to zero height on first paint. In the scroll-driven hero that was
 * fatal: framer-motion measured the parallax frames while they were still 0px
 * tall, computed scroll offsets from those measurements, and left the frames
 * stacked in the wrong place and already faded out.
 */

export const dimensions: Record<string, [number, number]> = {
  'commitments-hero': [1600, 1067],
  'connect-hero': [1512, 1585],
  'division-conferences': [1600, 1200],
  'division-design-stylization': [1600, 1067],
  'division-fundraising': [1600, 1067],
  'division-signature-moments': [1067, 1600],
  'division-weddings': [1067, 1600],
  'division-workshops': [1600, 1067],
  'experiences-hero': [1600, 1067],
  'foundation-began': [1600, 1067],
  'foundation-hero': [1600, 1067],
  'founder-hero': [1600, 1067],
  'founder-portrait': [1066, 1600],
  'founder-second': [1600, 1067],
  'home-hero': [1600, 1067],
  'home-philosophy': [1600, 1067],
  'perspectives-hero': [1600, 1200],
  'portfolio-celebration': [1600, 1067],
  'portfolio-christina-vince': [1600, 1200],
  'portfolio-claudia-ali': [1600, 1067],
  'portfolio-florals': [1200, 1600],
  'portfolio-modern-rustic': [1440, 1600],
  'portfolio-white-wedding': [1600, 1067],
  'press-hero': [1600, 1067],
}

export function sizeOf(id: string) {
  const size = dimensions[id]
  return size ? { width: size[0], height: size[1] } : {}
}
