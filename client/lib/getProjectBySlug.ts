const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI(path: string) {
    const requestUrl = `${STRAPI_URL}/api${path}`;
    const response = await fetch(requestUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch ${path}`);
    }

    return response.json();
}


export async function getProjectBySlug(slug: string) {
    return fetchAPI(`/projects?filters[slug][$eq]=${slug}&populate=*`);
}
