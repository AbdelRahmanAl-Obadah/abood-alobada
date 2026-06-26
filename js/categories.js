/**
 * Shared category utilities for admin panel and public portfolio.
 * Categories are stored in Firebase at site/categories.
 */

export const DEFAULT_CATEGORIES = {
  cat_web: { name: 'Web', slug: 'web', order: 1, active: true },
  cat_mobile: { name: 'Mobile App', slug: 'mobile-app', order: 2, active: true },
  cat_macos: { name: 'macOS', slug: 'macos', order: 3, active: true },
  cat_ai: { name: 'AI', slug: 'ai', order: 4, active: true },
  cat_competition: { name: 'Competition', slug: 'competition', order: 5, active: true },
  cat_blogs: { name: 'Blogs', slug: 'blogs', order: 6, active: true }
};

/** Maps legacy / alternate category values to canonical slugs. */
export const LEGACY_SLUG_MAP = {
  blog: 'blogs',
  blogs: 'blogs',
  mobile: 'mobile-app',
  'mobile-app': 'mobile-app',
  'mobile app': 'mobile-app',
  mobile_app: 'mobile-app',
  app: 'mobile-app',
  web: 'web',
  competition: 'competition',
  macos: 'macos',
  mac: 'macos',
  ai: 'ai',
  'artificial intelligence': 'ai'
};

export function slugify(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getSortedCategories(categories, { activeOnly = false } = {}) {
  const list = Object.entries(categories || {}).map(([key, cat]) => ({
    key,
    name: cat.name || '',
    slug: cat.slug || slugify(cat.name || key),
    order: Number(cat.order) || 0,
    active: cat.active !== false
  }));

  list.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.name.localeCompare(b.name);
  });

  return activeOnly ? list.filter(c => c.active) : list;
}

export function getCategorySlugs(categories) {
  return getSortedCategories(categories).map(c => c.slug);
}

export function findCategoryBySlug(categories, slug) {
  if (!slug) return null;
  const normalized = String(slug).trim().toLowerCase();
  return getSortedCategories(categories).find(c => c.slug === normalized) || null;
}

export function normalizeCategorySlug(raw, categories) {
  if (raw === null || raw === undefined) return '';
  const key = String(raw).trim().toLowerCase();
  if (!key) return '';

  const mapped = LEGACY_SLUG_MAP[key] || key.replace(/\s+/g, '-');
  const slugs = getCategorySlugs(categories);

  if (slugs.includes(mapped)) return mapped;

  // Match by display name (case-insensitive)
  const byName = getSortedCategories(categories).find(
    c => c.name.trim().toLowerCase() === key || c.name.trim().toLowerCase() === String(raw).trim().toLowerCase()
  );
  if (byName) return byName.slug;

  return mapped;
}

export function getCategoryLabel(categories, slug) {
  if (!slug) return 'Uncategorized';
  const normalized = normalizeCategorySlug(slug, categories);
  const cat = findCategoryBySlug(categories, normalized);
  if (cat) return cat.name;
  if (LEGACY_SLUG_MAP[String(slug).trim().toLowerCase()]) {
    const legacy = normalizeCategorySlug(slug, categories);
    const legacyCat = findCategoryBySlug(categories, legacy);
    if (legacyCat) return legacyCat.name;
  }
  return String(slug);
}

export function ensureDefaultCategories(existing) {
  if (!existing || !Object.keys(existing).length) {
    return structuredClone(DEFAULT_CATEGORIES);
  }
  return existing;
}

export function isCategoryActive(categories, slug) {
  const cat = findCategoryBySlug(categories, normalizeCategorySlug(slug, categories));
  return cat ? cat.active !== false : false;
}

export function buildCategorySelectOptions(categories, selectedSlug, { includeInactiveSelected = true } = {}) {
  const normalizedSelected = normalizeCategorySlug(selectedSlug, categories);
  const active = getSortedCategories(categories, { activeOnly: true });
  const options = [];

  active.forEach(cat => {
    options.push({
      slug: cat.slug,
      name: cat.name,
      selected: cat.slug === normalizedSelected
    });
  });

  if (includeInactiveSelected && normalizedSelected && !options.some(o => o.slug === normalizedSelected)) {
    const inactive = findCategoryBySlug(categories, normalizedSelected);
    options.unshift({
      slug: normalizedSelected,
      name: inactive ? `${inactive.name} (inactive)` : `${normalizedSelected} (inactive)`,
      selected: true
    });
  }

  if (!normalizedSelected) {
    options.unshift({ slug: '', name: 'Uncategorized', selected: true });
  }

  return options;
}

export function normalizeProjectsCategories(projects, categories) {
  const updates = {};
  Object.entries(projects || {}).forEach(([key, project]) => {
    const current = project.category || '';
    const normalized = normalizeCategorySlug(current, categories);
    if (normalized !== current) {
      updates[key] = { ...project, category: normalized };
    }
  });
  return updates;
}
