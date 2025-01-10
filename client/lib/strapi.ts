// const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
// const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// async function fetchAPI(path: string) {
//     const requestUrl = `${STRAPI_URL}/api${path}`;
//     const response = await fetch(requestUrl, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${STRAPI_API_TOKEN}`
//         }
//     });

//     if (!response.ok) {
//         throw new Error(`Failed to fetch ${path}`);
//     }

//     return response.json();
// }


// export async function getAllProjects() {
//     return fetchAPI('/projects?populate=coverImage');
// }

// export async function getProjectBySlug(slug: string) {
//     return fetchAPI(`/projects?filters[slug][$eq]=${slug}&populate=*`);
// }


const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function getAllProjects() {
    try {
        const response = await fetch(`${STRAPI_URL}/api/projects`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
            },
            next: {
                revalidate: 3600 // Revalidate every hour
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.status}`);
        }

        const data = await response.json();
        return { data: data.data || [], error: null };
    } catch (error) {
        console.error('Error fetching projects:', error);
        return { data: [], error: 'Failed to load projects' };
    }
}