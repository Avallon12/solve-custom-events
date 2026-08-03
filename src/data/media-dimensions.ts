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
  'division-conferences': [815, 662],
  'division-design-stylization': [1001, 666],
  'division-fundraising': [675, 662],
  'division-signature-moments': [1005, 662],
  'division-weddings': [997, 662],
  'division-workshops': [892, 667],
  'experiences-hero': [1600, 1067],
  'foundation-began': [1600, 1067],
  'foundation-hero': [1600, 1067],
  'founder-hero': [1600, 1067],
  'founder-portrait': [1130, 1392],
  'founder-second': [1122, 1402],
  'home-hero': [1600, 1067],
  'home-philosophy': [566, 412],
  'portfolio-claudia-ali': [1600, 1067],
  'portfolio-conferences': [815, 662],
  'portfolio-destination': [442, 650],
  'portfolio-florals': [1200, 1600],
  'portfolio-fundraising': [675, 662],
  'portfolio-mingle': [862, 592],
  'portfolio-mmm': [1001, 665],
  'portfolio-multicultural': [992, 656],
  'portfolio-signature': [1005, 662],
  'portfolio-threads': [1536, 1024],
  'portfolio-vogue': [470, 577],
  'portfolio-weddings': [442, 632],
  'portfolio-workshops': [892, 667],
}

export function sizeOf(id: string) {
  const size = dimensions[id]
  return size ? { width: size[0], height: size[1] } : {}
}
