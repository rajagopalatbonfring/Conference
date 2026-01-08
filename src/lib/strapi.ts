const STRAPI_URL = process.env.STRAPI_URL || 'https://strapi.scientiaforum.org';
const TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchStrapi<T = any>(
  path: string,
  params: Record<string, any> = {}
): Promise<T> {
  const url = new URL(path, STRAPI_URL);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined) {
      url.searchParams.set(k, String(v));
    }
  });

  const res = await fetch(url, {
    headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {},
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Strapi error:', res.status, err);
    throw new Error(`Strapi error ${res.status}: ${err}`);
  }

  const json = await res.json();
  return json.data as T; // Strapi v5 returns data directly
}

export async function getAllBlogPosts(): Promise<any[]> {
  return fetchStrapi<any[]>('/api/blog-posts', {
    sort: 'publishedAt:desc',
    populate: 'image',
    pagination: { pageSize: 20 },
  });
}

export async function getBlogPostBySlug(slug: string): Promise<any | null> {
  try {
    // Strapi v5 shorthand filter syntax (more reliable)
    const results = await fetchStrapi<any[]>('/api/blog-posts', {
      'filters[slug]': slug,          // ← this works better in v5
      populate: 'image',
      pagination: { pageSize: 1 },
    });

    console.log('Single post fetch result:', results); // debug

    return results?.[0] || null;
  } catch (err) {
    console.error('getBlogPostBySlug error:', err);
    return null;
  }
}